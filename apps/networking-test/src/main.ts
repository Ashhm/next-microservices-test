import { NatsQueueName } from '@app/shared/common/constants';
import { NetworkingNatsConfigurationService } from '@app/shared/configuration/networking';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const appContext = await NestFactory.createApplicationContext(AppModule);

  const networkingNatsConfigurationService = appContext.get(NetworkingNatsConfigurationService);
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.NATS,
    options: {
      servers: networkingNatsConfigurationService.uri,
      queue: NatsQueueName.TestQueue,
    },
  });

  /*const app = await NestFactory.createMicroservice<MicroserviceOptions>(NetworkingTestModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost:5672'],
      queue: 'cats_queue',
    },
  });*/

  await app.listen();
}
bootstrap();
