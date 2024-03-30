import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import {TypeOrmModule} from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'database',
      port: 5432,
      username: 'lap-api',
      password: 'password',
      database: 'lapdb',
      entities:['auth/entities/auth.entity.ts'],
      synchronize: true,  // Should'nt be used in production
      autoLoadEntities: true
    }),
    AuthModule],
})
export class AppModule {}
