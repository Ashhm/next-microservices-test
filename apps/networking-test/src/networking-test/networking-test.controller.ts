import { Controller, Logger } from '@nestjs/common';
import { Ctx, EventPattern, MessagePattern, NatsContext, Transport } from '@nestjs/microservices';

@Controller()
export class NetworkingTestController {
  private readonly logger = new Logger(NetworkingTestController.name);

  @MessagePattern({ cmd: 'rpc' })
  rpcHandler1(payload: unknown, @Ctx() context: NatsContext) {
    this.logger.log('Hello from RPC handler1');
    return 'rpcHandler1';
  }

  @EventPattern('no-match')
  eventHandler2(payload: string, @Ctx() context: NatsContext) {
    this.logger.log('Hello from event with no match');
    return 'eventHandler2';
  }

  @EventPattern('plain_pattern')
  eventHandler1(payload: unknown, @Ctx() context: NatsContext) {
    this.logger.log('Hello from event handler1');
    return 'eventHandler1';
  }

  @EventPattern('plain_pattern', Transport.RMQ)
  eventHandler3(payload: unknown, @Ctx() context: NatsContext) {
    this.logger.log('Hello from event handler3');
    return 'eventHandler1';
  }
}
