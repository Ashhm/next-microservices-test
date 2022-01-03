import { ConfigurationNamespace } from '@app/shared/common/constants';
import { registerAs } from '@nestjs/config';

export default registerAs(ConfigurationNamespace.Application, () => ({
  port: process.env.MEDIA_API_GATEWAY_HTTP_API_PORT,
}));
