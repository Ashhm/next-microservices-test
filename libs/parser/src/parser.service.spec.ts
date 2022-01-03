import { Test, TestingModule } from '@nestjs/testing';
import { ParserHelper } from './parser-helper';

describe('ParserService', () => {
  let service: ParserHelper;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParserHelper],
    }).compile();

    service = module.get<ParserHelper>(ParserHelper);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
