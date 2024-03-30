import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Add a global prefix
  app.setGlobalPrefix('immotepAPI');

  // Enable CORS
  app.enableCors();
  
  // Enable versioning
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: ['1'],
  });

  // Swagger configuration
  const swaggerConfig = new DocumentBuilder()
    .setTitle('API - Immotep')
    .setDescription(
      'API used by the mobile application Immotep, an application made for make inventories easier',
    )
    .setVersion('1.0')
    .addTag('Immotep')
    .build();
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('/', app, swaggerDocument);

  await app.listen(3000);
}
bootstrap();
