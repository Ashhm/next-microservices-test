import { Module } from '@nestjs/common';
import { NetworkingTestController } from './networking-test.controller';
import { NetworkingTestService } from './networking-test.service';

@Module({
  controllers: [NetworkingTestController],
  providers: [NetworkingTestService],
})
export class NetworkingTestModule {}
