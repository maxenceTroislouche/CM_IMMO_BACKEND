import { Module } from '@nestjs/common';
import { SignaturesService } from './signatures.service';
import { SignaturesController } from './signatures.controller';
import { Contract } from '../properties/entities/contract.entity';
import { Inventory } from '../inventories/entities/inventory.entity';
import { EstateAgent } from '../estateAgents/entities/estateAgent.entity';
import { AgentSignature } from '../properties/entities/agent-signature.entity';
import { TenantSignature } from '../properties/entities/tenant-signature.entity';
import { OwnerSignature } from '../properties/entities/owner-signature.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Contract, Inventory, EstateAgent, AgentSignature, OwnerSignature, TenantSignature])],
    controllers: [SignaturesController],
    providers: [SignaturesService],
    exports: [SignaturesService]
})
export class SignaturesModule {}
