import { SharedConfigurationModule } from '@app/shared';
import { NetworkingNatsConfigurationModule } from '@app/shared/configuration/networking';
import { Module } from '@nestjs/common';
import { NetworkingTestModule } from './networking-test/networking-test.module';

@Module({
  imports: [SharedConfigurationModule, NetworkingNatsConfigurationModule, NetworkingTestModule],
})
export class AppModule {}
