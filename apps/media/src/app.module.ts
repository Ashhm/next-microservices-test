import { Module } from '@nestjs/common';
import { ApplicationConfigurationModule } from './configuration/application/configuration.module';
import { MediaModule } from './media/media.module';

@Module({
  // TODO: Shared module should be configurable
  imports: [ApplicationConfigurationModule, MediaModule],
})
export class AppModule {}
