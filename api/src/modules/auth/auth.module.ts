import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AgentsModule } from '../estateAgents/estateAgents.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './config/constants';

@Module({
  imports: [
    AgentsModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
  
})
export class AuthModule {}
