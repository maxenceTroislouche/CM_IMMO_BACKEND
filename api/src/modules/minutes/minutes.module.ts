import { Module } from '@nestjs/common';
import { MinutesService } from './minutes.service';
import { MinutesController } from './minutes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Minute } from './entities/minute.entity';

@Module({
  imports : [TypeOrmModule.forFeature([Minute])],
  controllers: [MinutesController],
  providers: [MinutesService],
  exports: [MinutesService],
})
export class MinutesModule {}
