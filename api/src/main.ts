import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Add a global prefix
  app.setGlobalPrefix('api-lap');

  // Swagger configuration
  const swaggerConfig = new DocumentBuilder()
    .setTitle('API - LAP')
    .setDescription(
      'API used by the mobile application LAP, an application made for make inventories easier',
    )
    .setVersion('1.0')
    .addTag('LAP')
    .build();
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('/', app, swaggerDocument);
  
  // Enable CORS
  app.enableCors();

  // TODO Enable versioning

  await app.listen(3000);
}
bootstrap();
