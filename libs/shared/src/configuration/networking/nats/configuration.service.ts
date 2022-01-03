import { ConfigurationNamespace, NatsQueueName } from '@app/shared/common/constants';
import { TransportName } from '@app/shared/common/constants/networking/transport-name.enum';
import { Injectable } from '@nestjs/common';
import { ConfigService, ConfigType } from '@nestjs/config';
import configuration from './configuration';

@Injectable()
export class NetworkingNatsConfigurationService {
  constructor(private configurationService: ConfigService) {}

  get uri() {
    return this.configurationService.get<ConfigType<typeof configuration>>(
      `${ConfigurationNamespace.Networking}.${TransportName.Nats}`,
    ).uri;
  }

  getQueue(queueName: NatsQueueName) {
    return this.configurationService.get<ConfigType<typeof configuration>>(
      `${ConfigurationNamespace.Networking}.${TransportName.Nats}`,
    ).queues[queueName];
  }
}
