import { Injectable } from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { Property } from './entities/property.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FindAllPropertiesDto } from './dto/property-findall.dto';

@Injectable()
export class PropertiesService {
  @InjectRepository(Property)
  private propertiesRepository: Repository<Property>;

  create(createPropertyDto: CreatePropertyDto) {
    return 'WIP';
  }

  async findAll() {
    let properties = await this.propertiesRepository.find({ relations: ['owner', 'propertyType', 'contracts', 'contracts.owner', 'contracts.renter', 'contracts.reviews'] });
    /*
    let returnArray = [];
    for (let property of properties) {
      let property_obj = new FindAllPropertiesDto();
      property_obj.id = property.id;
      property_obj.nomProprietaire = property.owner.lastname;
      property_obj.prenomProprietaire = property.owner.firstname;
      property_obj.typeBien = property.propertyType.lib;
      property_obj.photos = property_obj.photos; // TODO: Récupérer le chemin des photos
      returnArray.push(property_obj);
    }
    */
    return properties;
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
