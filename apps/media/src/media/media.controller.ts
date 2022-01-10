import { ConfigurationNamespace } from '@app/shared/common/constants';
import {
  Controller,
  Get,
  HttpException,
  Inject,
  Logger,
  Param,
  Post,
  Response,
  StreamableFile,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { FileInterceptor } from '@nestjs/platform-express';
import { MediaService } from './media.service';

@Controller('media')
export class MediaController {
  private readonly logger = new Logger(MediaController.name);

  constructor(
    private readonly mediaApiService: MediaService,
    @Inject('NETWORK_TEST_SERVICE') private client: ClientProxy,
  ) {}

  @Get('/send-messages')
  async sendMessages() {
    const payload = [1, 2, 3];
    // RPC
    this.client.send<number>({ cmd: 'rpc' }, payload).subscribe();
    // Event
    this.client.emit(ConfigurationNamespace.Application, 'Message body');

    return 'OK';
  }

  @Get('/:filePath')
  async downloadFile(@Param('filePath') filePath: string): Promise<StreamableFile> {
    const stream = await this.mediaApiService.getFileStream(filePath);
    return new Promise((resolve, reject) => {
      stream.on('error', (err) => {
        reject(new HttpException(err.message, 404));
      });
      stream.on('readable', () => {
        stream.removeAllListeners('readable');
        resolve(new StreamableFile(stream, { type: 'image/jpeg' }));
      });
    });
  }

  @Post()
  @UseInterceptors(FileInterceptor('file', { dest: '/mnt/d/tmp' }))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return file;
  }
}
