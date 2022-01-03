import { Module } from '@nestjs/common';
import { ParserHelper } from './parser.helper';

@Module({
  providers: [ParserHelper],
  exports: [ParserHelper],
})
export class ParserModule {}
