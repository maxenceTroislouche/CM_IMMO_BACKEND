import { Module } from '@nestjs/common';
import { EstateAgentsService } from './estateAgents.service';
import { EstateAgentsController } from './estateAgents.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstateAgent } from './entities/estateAgent.entity';
import { AuthGuard } from '../auth/auth.guard';

@Module({
  imports : [TypeOrmModule.forFeature([EstateAgent])],
  controllers: [EstateAgentsController],
  providers: [EstateAgentsService],
  exports : [EstateAgentsService]
})
export class AgentsModule {}
