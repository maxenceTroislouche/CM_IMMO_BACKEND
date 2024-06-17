import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(bodyParser.json({ limit: '50mb' }));

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
    .addBearerAuth({
      description: 'No need to put the "bearer" keyword in front of token',
      type: 'http',
      in: 'header',
      scheme: 'bearer',
      bearerFormat: 'JWT',
    },)
    .build();
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('/', app, swaggerDocument);

  await app.listen(3000);
}
bootstrap();
