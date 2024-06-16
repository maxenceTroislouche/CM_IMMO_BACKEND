import { Inject, Injectable,NotFoundException } from '@nestjs/common';
import { CreateMinuteDto } from './dto/create-minute.dto';
import { UpdateMinuteDto } from './dto/update-minute.dto';
import { InjectRepository, } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Minute } from './entities/minute.entity';
import { FindMinuteDto } from './dto/find-minute.dto';
import { Photo } from '../properties/entities/photo.entity';
import { v4 as uuidv4 } from 'uuid';
import { writeFileSync, unlinkSync, mkdir, existsSync } from 'fs';
import { Client } from 'minio';

@Injectable()
export class MinutesService {
  @InjectRepository(Minute)
  private minuteRepository: Repository<Minute>;

  @InjectRepository(Photo)
  private photoRepository: Repository<Photo>;
  
  async create(createMinuteDto: CreateMinuteDto): Promise<Minute> {
    const minute = this.minuteRepository.create(createMinuteDto);
    return await this.minuteRepository.save(minute);
  }

  async findAll(): Promise<Minute[]> {
    return await this.minuteRepository.find();
  }

  async findOne(findMinuteDto: FindMinuteDto): Promise<Minute> {
    const { id_edl, id_element } = findMinuteDto;
    const minute = await this.minuteRepository.findOne({ where: { id_edl, id_element } });
    if (!minute) {
      throw new NotFoundException('Minute not found');
    }
    return minute;
  }

  async update(updateMinuteDto: UpdateMinuteDto): Promise<Minute> {
    const findMinuteDto = new FindMinuteDto();
    findMinuteDto.id_edl = updateMinuteDto.id_edl;
    findMinuteDto.id_element = updateMinuteDto.id_element;

    const minute = await this.findOne(findMinuteDto);

    let minioClient = new Client({
      endPoint: 'minio.taffin.ovh',
      port: 443,
      useSSL: true,
      accessKey: 'mODvNLwCYcqJXNf4Lci1',
      secretKey: '3YXQium7Hrmyqz1zS694t6gF4wgbe6ufO7DLABuf',
    });

    const photoIds = [];

    // TODO: Créer les photos et les affecte à la minute
    for (const photoB64 of updateMinuteDto.photos) {
      // Générer un uuid
      const uuid = uuidv4();
      const filepath = `/app/${uuid}`;
      console.log(filepath);
      // Copier le contenu de photoB64 dans un fichier
      writeFileSync(filepath, photoB64);

      // Ajouter le fichier dans le bucket minio
      await minioClient.fPutObject('immotep-files', uuid, filepath);

      try {
        unlinkSync(filepath);
      } catch {

      }

      // Ajouter dans la table photo une nouvelle entrée avec le nom du fichier
      const photo = this.photoRepository.create({
        id: await this.photoRepository.maximum('id') + 1,
        path: uuid
      });
      console.log(photo);
      console.log(`max id: ${await this.photoRepository.maximum('id')}`)
      await this.photoRepository.save(photo);
      console.log("ajouté")

      photoIds.push(photo.id);
    }

    Object.assign(minute, updateMinuteDto);
    // Copie des id de la table photo
    minute.photos = [...photoIds];   
    return this.minuteRepository.save(minute);
  }

  async remove(findMinuteDto: FindMinuteDto): Promise<void> {
    /*const result = await this.minuteRepository.delete({ id });
    if (result.affected === 0) {
      throw new NotFoundException(`Minute with i ${id} not found`);
    }*/
      const minute = await this.findOne(findMinuteDto);
      await this.minuteRepository.remove(minute);
  }
}
