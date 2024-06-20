import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { AgentSignature } from "../properties/entities/agent-signature.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { OwnerSignature } from "../properties/entities/owner-signature.entity";
import { TenantSignature } from "../properties/entities/tenant-signature.entity";
import { CreateSignatureDto } from "./dto/create-signature.dto";
import { Inventory } from "../inventories/entities/inventory.entity";
import { Client } from "minio";

import { v4 as uuidv4 } from 'uuid';
import { writeFileSync, unlinkSync } from 'fs';

@Injectable()
export class SignaturesService {
  @InjectRepository(AgentSignature)
  private agentSignaturesRepository: Repository<AgentSignature>;

  @InjectRepository(OwnerSignature)
  private ownerSignaturesRepository: Repository<OwnerSignature>;

  @InjectRepository(TenantSignature)
  private renterSignaturesRepository: Repository<TenantSignature>;

  @InjectRepository(Inventory)
  private inventoryRepository: Repository<Inventory>;

  async create(createSignatureDto: CreateSignatureDto) {
    // On regarde le type
    if (createSignatureDto.type !== "AGENT" && createSignatureDto.type !== "LOCATAIRE" && createSignatureDto.type !== "PROPRIETAIRE") {
      throw new HttpException("Bad request: incorrect type", HttpStatus.BAD_REQUEST)
    }

    const inventory = await this.inventoryRepository.findOne({ where: { id: createSignatureDto.inventoryId }, relations: ["contract", "contract.renter", "contract.owner", "estateAgent"]});
    if (!inventory) {
      throw new HttpException("Bad request: inventory not found", HttpStatus.BAD_REQUEST)
    }
    console.log(inventory)
    const contract = inventory.contract;
    if (!contract) {
      throw new HttpException("Bad request: contract not found", HttpStatus.BAD_REQUEST);
    }

    // Ajouter la photo dans la base de données
    let minioClient = new Client({
      endPoint: 'minio.taffin.ovh',
      port: 443,
      useSSL: true,
      accessKey: 'mODvNLwCYcqJXNf4Lci1',
      secretKey: '3YXQium7Hrmyqz1zS694t6gF4wgbe6ufO7DLABuf',
    });

    // Générer un uuid
    const uuid = uuidv4();
    const filepath = `/app/${uuid}`;
    const filebuffer = Buffer.from(createSignatureDto.image, 'base64');

    // Copier le contenu de photoB64 dans un fichier
    writeFileSync(filepath, filebuffer);

    // Ajouter le fichier dans le bucket minio
    await minioClient.fPutObject('immotep-files', uuid, filepath);

    let signature;
    // Si agent -> regarde l'id agent dans l'état des lieux
    if (createSignatureDto.type === "AGENT") {
      signature = this.agentSignaturesRepository.create({
        path: uuid,
        date: new Date(),
        inventoryId: createSignatureDto.inventoryId,
        agentId: inventory.estateAgent.id,
      });
      await this.agentSignaturesRepository.save(signature);
    } else if (createSignatureDto.type === "LOCATAIRE") {
      // Si locataire ou proprietaire -> regarde dans le contract de l'état des lieux

      signature = this.renterSignaturesRepository.create({
        path: uuid,
        date: new Date(),
        inventoryId: createSignatureDto.inventoryId,
        renterId: contract.renter.id,
      });
      await this.renterSignaturesRepository.save(signature);
    } else {
      signature = this.ownerSignaturesRepository.create({
        path: uuid,
        date: new Date(),
        inventoryId: createSignatureDto.inventoryId,
        ownerId: contract.owner.id,
      });
      await this.ownerSignaturesRepository.save(signature);
    }

    // On essaie de supprimer le fichier !
    try {
      unlinkSync(filepath);
    } catch {

    }

    return signature;
  }
}