import { Inject, Injectable, Logger } from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { Property } from './entities/property.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ReturningStatementNotSupportedError } from 'typeorm';
import { FindAllPropertiesDto } from './dto/property-findall.dto';
import { Photo } from './entities/photo.entity';
import { Client } from 'minio';

@Injectable()
export class PropertiesService {
  @InjectRepository(Property)
  private propertiesRepository: Repository<Property>;

  @InjectRepository(Photo)
  private photosRepository: Repository<Photo>;

  private readonly logger: Logger;

  constructor() {
    this.logger = new Logger(PropertiesService.name);
  }

  create(createPropertyDto: CreatePropertyDto) {
    return 'WIP';
  }

  async getPhotoFilenameFromId(id: number) {
    let photo = await this.photosRepository.findOneBy({id:id});

    if (photo) {
      return photo.path;
    } else {
      return null;
    }
  }

  async getDynamicPhotoUrlFromFilename(filename: string) {
    let minioClient = new Client({
      endPoint: 'immotep-object-storage',
      port: 9000,
      useSSL: false,
      accessKey: 'qEektKwajFCsQQvwf8hD',
      secretKey: 'C1PE6Jp3XbGm9W6S7vtsMpmViwxAheNujZZmaxB4',
    });

    // TODO: Attention l'url utilisé le endpoint est utilisé pour signer l'url,
    //  Donc si on remplace le endpoint par l'ip ou le dns name on aura une échec de signature incorrecte !
    let url = await minioClient.presignedGetObject('immotep-files', filename, 60*60);
    return url;
  }

  async findAll() {
    let properties = await this.propertiesRepository.find({ relations: ['owner', 'propertyType', 'contracts', 'contracts.owner', 'contracts.renter', 'contracts.reviews'] });
    let returnArray = [];
    for (let property of properties) {
      let photosUrls = [];

      for (let photoId of property.photos) {
        let photoFilename = await this.getPhotoFilenameFromId(parseInt(photoId));
        let photoUrl = await this.getDynamicPhotoUrlFromFilename(photoFilename);
        photosUrls.push(photoUrl);
      }
         
      let property_obj = new FindAllPropertiesDto();
      property_obj.id = property.id;
      property_obj.nomProprietaire = property.owner.lastname;
      property_obj.prenomProprietaire = property.owner.firstname;
      property_obj.typeBien = property.propertyType.lib;
      property_obj.photos = photosUrls;
      property_obj.pourcentageAvancement = property.contracts.at(-1).reviews.at(-1).progress;
      returnArray.push(property_obj);
    }
    return returnArray;
  }

  findOne(id: number) {
    return this.propertiesRepository.findOneBy({id:id});
  }

  update(id: number, updatePropertyDto: UpdatePropertyDto) {
    return `WIP`;
  }

  remove(id: number) {
    return this.propertiesRepository.delete(id);
  }
}
