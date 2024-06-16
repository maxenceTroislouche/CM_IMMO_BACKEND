import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AgentsModule } from '../estateAgents/estateAgents.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtConfigAsync } from 'src/config/jwt.config';

@Module({
  imports: [
    AgentsModule,
    JwtModule.registerAsync(JwtConfigAsync),
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthModule]
})
export class AuthModule {}
