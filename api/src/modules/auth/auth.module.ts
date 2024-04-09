import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AgentsModule } from '../estateAgents/estateAgents.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    AgentsModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        global: true,
        secret: '594e2c6cf6efd21c886d6a6d2d2d9b3132203c944183d4905e1416fd1f0eb7ff',
        signOptions: { expiresIn: '1w' },
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthModule]
})
export class AuthModule {}
