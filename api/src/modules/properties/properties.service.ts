import { Injectable } from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { Property } from './entities/property.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PropertiesService {
    
  @InjectRepository(Property)
  private propertyRepository: Repository<Property>;

  create(createPropertyDto: CreatePropertyDto) {
    return 'WIP';
  }

  findAll() {
    return this.propertyRepository.find();
  }

  findOne(id: number) {
    return this.propertyRepository.findOneBy({id:id});
  }

  update(id: number, updatePropertyDto: UpdatePropertyDto) {
    return `WIP`;
  }

  remove(id: number) {
    return this.propertyRepository.delete(id);
  }
}
