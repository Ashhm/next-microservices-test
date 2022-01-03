import { Injectable } from '@nestjs/common';

@Injectable()
export class ParserHelper {
  toNumber(value: unknown, defaultValue?: number) {
    return value ? Number(value) : defaultValue;
  }
}
