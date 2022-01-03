import { ParserModule } from '@app/parser';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './configuration';
import { ApplicationConfigurationService } from './configuration.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      load: [configuration],
    }),
    ParserModule,
  ],
  providers: [ApplicationConfigurationService, ConfigService],
  exports: [ApplicationConfigurationService],
})
export class ApplicationConfigurationModule {}
