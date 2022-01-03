import {
  Controller,
  Get,
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
    await this.client.send<number>({ cmd: 'rpc' }, payload).subscribe((x) => this.logger.log(x));
    await this.client.emit<number>('plain_pattern', 'Message body');
    return 'res';
  }

  @Get('/:filePath')
  async download(
    @Response({ passthrough: true }) res,
    @Param('filePath') filePath: string,
  ): Promise<StreamableFile> {
    const stream = await this.mediaApiService.getFileStream(filePath);
    res.set({
      'Content-Type': 'image/jpeg',
    });
    return new StreamableFile(stream);
  }

  @Post()
  @UseInterceptors(FileInterceptor('file', { dest: '/mnt/d/tmp' }))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return file;
  }
}
