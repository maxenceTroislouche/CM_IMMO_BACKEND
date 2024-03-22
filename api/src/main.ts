import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger configuration
  const swaggerConfig = new DocumentBuilder()
    .setTitle('LAP - API')
    .setDescription(
      'API used by the mobile application LAP, an application made for make inventories easier',
    )
    .setVersion('1.0')
    .addTag('LAP')
    .build();
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('doc', app, swaggerDocument);
  
  // Enable CORS
  app.enableCors();
  
  await app.listen(3000);
}
bootstrap();
