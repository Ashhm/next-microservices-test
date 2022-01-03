import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './configuration';
import { NetworkingNatsConfigurationService } from './configuration.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      load: [configuration],
    }),
  ],
  providers: [NetworkingNatsConfigurationService, ConfigService],
  exports: [NetworkingNatsConfigurationService, ConfigService],
})
export class NetworkingNatsConfigurationModule {}
