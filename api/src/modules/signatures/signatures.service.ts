import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { AgentSignature } from "../properties/entities/agent-signature.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { OwnerSignature } from "../properties/entities/owner-signature.entity";
import { RenterSignature } from "../properties/entities/renter-signature.entity";
import { CreateSignatureDto } from "./dto/create-signature.dto";

@Injectable()
export class SignaturesService {
  @InjectRepository(AgentSignature)
  private agentSignaturesRepository: Repository<AgentSignature>;

  @InjectRepository(OwnerSignature)
  private ownerSignaturesRepository: Repository<OwnerSignature>;

  @InjectRepository(RenterSignature)
  private renterSignaturesRepository: Repository<RenterSignature>;

  async create(createSignatureDto: CreateSignatureDto) {
    // On regarde le type
    if (createSignatureDto.type !== "AGENT" && createSignatureDto.type !== "LOCATAIRE" && createSignatureDto.type !== "PROPRIETAIRE") {
        throw new HttpException("Bad request: incorrect type", HttpStatus.BAD_REQUEST)
    }

    // Si agent -> il faut regarder le token et récupérer l'id de l'agent

    // Si locataire ou proprietaire -> 

  }
}