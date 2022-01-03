import { ParserHelper } from '@app/parser';
import { ConfigurationNamespace } from '@app/shared/common/constants';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ApplicationConfigurationService {
  constructor(private configurationService: ConfigService, private parserHelper: ParserHelper) {}

  get port(): number {
    return this.parserHelper.toNumber(
      this.configurationService.get(`${ConfigurationNamespace.Application}.port`),
    );
  }
}
