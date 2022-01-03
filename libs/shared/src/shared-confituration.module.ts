import {
  NetworkingNatsConfigurationModule,
  NetworkingNatsConfigurationService,
} from '@app/shared/configuration/networking';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [NetworkingNatsConfigurationModule],
  providers: [ConfigService, NetworkingNatsConfigurationService],
  exports: [ConfigService, NetworkingNatsConfigurationService],
})
export class SharedConfigurationModule {}
