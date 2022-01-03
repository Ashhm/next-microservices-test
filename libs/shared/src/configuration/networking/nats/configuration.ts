import { ConfigurationNamespace, NatsQueueName } from '@app/shared/common/constants';
import { TransportName } from '@app/shared/common/constants/networking/transport-name.enum';
import { registerAs } from '@nestjs/config';

export default registerAs(`${ConfigurationNamespace.Networking}.${TransportName.Nats}`, () => ({
  uri: process.env.NETWORKING_NATS_URI,
  queues: {
    [NatsQueueName.TestQueue]: process.env.NETWORKING_NATS_STATS_QUEUE,
  },
}));
