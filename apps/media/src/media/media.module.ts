import { SharedConfigurationModule } from '@app/shared';
import { NatsQueueName } from '@app/shared/common/constants';
import { NetworkingNatsConfigurationService } from '@app/shared/configuration/networking';
import { Module } from '@nestjs/common';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { MediaController } from './media.controller';
import { MediaService } from './media.service';

@Module({
  imports: [SharedConfigurationModule],
  controllers: [MediaController],
  providers: [
    MediaService,
    {
      provide: 'NETWORK_TEST_SERVICE',
      inject: [NetworkingNatsConfigurationService],
      useFactory: (configService: NetworkingNatsConfigurationService) => {
        return ClientProxyFactory.create({
          transport: Transport.NATS,
          options: {
            servers: [configService.uri],
            queue: NatsQueueName.TestQueue,
          },
          /* transport: Transport.RMQ,
          options: {
            urls: ['amqp://localhost:5672'],
            queue: NatsQueueName.TestQueue,
          },*/
        });
      },
    },
  ],
})
export class MediaModule {}
