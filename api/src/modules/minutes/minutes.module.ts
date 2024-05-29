import { Module } from '@nestjs/common';
import { MinutesService } from './minutes.service';
import { MinutesController } from './minutes.controller';

@Module({
  controllers: [MinutesController],
  providers: [MinutesService],
})
export class MinutesModule {}
