import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ApplicationConfigurationService } from './configuration/application/configuration.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const applicationConfigurationService = app.get(ApplicationConfigurationService);
  await app.listen(applicationConfigurationService.port);
}

bootstrap();
