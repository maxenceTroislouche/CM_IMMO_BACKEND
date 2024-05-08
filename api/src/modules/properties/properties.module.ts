import { Module } from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { PropertiesController } from './properties.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HeatingType } from './entities/heating-type.entity';
import { PropertyType } from './entities/property-type.entity';
import { City } from './entities/city.entity';
import { Property } from './entities/property.entity';
import { WaterHeatingType } from './entities/water-heating-type.entity';
import { Photo } from './entities/photo.entity';
import { Person } from './entities/person.entity';
import { PersonType } from './entities/person-type.entity';
import { Contract } from './entities/contract.entity';
import { Review } from './entities/review.entity';
import { EstateAgent } from '../estateAgents/entities/estateAgent.entity';

@Module({
  imports : [TypeOrmModule.forFeature([Property, City, PropertyType, HeatingType, WaterHeatingType, Photo, Person, PersonType, Contract, Review, EstateAgent])],
  controllers: [PropertiesController],
  providers: [PropertiesService],
  exports: [PropertiesService]
})
export class PropertiesModule {}