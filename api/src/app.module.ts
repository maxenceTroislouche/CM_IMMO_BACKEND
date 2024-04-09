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
    ConfigModule.forRoot(
      {envFilePath: ['.env.local','.env.development','.env']}
    ),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        synchronize: configService.get<boolean>('DB_SYNCHRONIZE'), // Should'nt be used in production
        autoLoadEntities: true,
      }),
    }),
    AuthModule,
  ],
})
export class AppModule {}
