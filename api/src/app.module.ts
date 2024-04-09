import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './modules/auth/auth.guard';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [{
    provide: APP_GUARD,
    useClass: AuthGuard,
  },JwtService
],
  imports: [
    ConfigModule.forRoot({isGlobal:true}),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: 'database',
        port: 5432,
        username: 'immotep-api',
        password: 'password',
        database: 'immotepdb',
        synchronize: true, // Should'nt be used in production
        autoLoadEntities: true,
      }),
    }),
    AuthModule,
  ],
})
export class AppModule {}
