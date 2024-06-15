import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './modules/auth/auth.guard';
import { JwtService } from '@nestjs/jwt';
import { typeOrmConfigAsync } from './config/typeorm.config';
import { AgentsModule } from './modules/estateAgents/estateAgents.module';
import { PropertiesModule } from './modules/properties/properties.module';
import { InventoriesModule } from './modules/inventories/inventories.module';
import { TestImageModule } from './test_image/test_image.module';

@Module({
  providers: [{
    provide: APP_GUARD,
    useClass: AuthGuard,
  },JwtService
],
  imports: [
    ConfigModule.forRoot({isGlobal:true}),
    TypeOrmModule.forRootAsync(typeOrmConfigAsync),
    AuthModule,
    AgentsModule,
    PropertiesModule,
    InventoriesModule,
    TestImageModule,
  ],
})
export class AppModule {}
