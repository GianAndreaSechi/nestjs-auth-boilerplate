import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const version = process.env.VERSION_TAG;
  app.setGlobalPrefix('api/v1'); //setted prefix in front of routes
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  const config = new DocumentBuilder()
      .setTitle('HomeToolbox')
      .setDescription('Api Boilerplate with authentication and swagger')
      .setVersion(version)
      .addBearerAuth({
        type:"http",
        scheme:'bearer',
        bearerFormat:'JWT',
    
        } ,'access-token')

      .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, {
    swaggerOptions: {
      supportedSubmitMethods: ['get'],
    }
  });

  await app.listen(3000);
}
bootstrap();
