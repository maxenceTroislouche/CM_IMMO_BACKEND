import { Module } from '@nestjs/common';
import { InventoriesController } from './inventories.controller';
import { InventoriesService } from './inventories.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Property } from '../properties/entities/property.entity';
import { City } from '../properties/entities/city.entity';
import { PropertyType } from '../properties/entities/property-type.entity';
import { HeatingType } from '../properties/entities/heating-type.entity';
import { WaterHeatingType } from '../properties/entities/water-heating-type.entity';
import { Photo } from '../properties/entities/photo.entity';
import { Person } from '../properties/entities/person.entity';
import { PersonType } from '../properties/entities/person-type.entity';
import { Contract } from '../properties/entities/contract.entity';
import { Inventory } from './entities/inventory.entity';
import { EstateAgent } from '../estateAgents/entities/estateAgent.entity';
import { Room } from '../properties/entities/room.entity';
import { RoomType } from '../properties/entities/room-type.entity';
import { RoomRole } from '../properties/entities/room-role.entity';
import { ElementType } from './entities/element-type.entity';
import { Minute } from '../minutes/entities/minute.entity';
import { Element } from './entities/element.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Property,
      City,
      PropertyType,
      HeatingType,
      WaterHeatingType,
      Photo,
      Person,
      PersonType,
      Contract,
      Inventory,
      EstateAgent,
      Room,
      RoomType,
      RoomRole,
      Element,
      ElementType,
      Minute,
    ]),
  ],
  controllers: [InventoriesController],
  providers: [InventoriesService],
  exports: [InventoriesService],
})
export class InventoriesModule {}
