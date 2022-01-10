import * as fs from 'fs';
import { Injectable } from '@nestjs/common';
import * as path from 'path';

@Injectable()
export class MediaService {
  getFileStream(filePath: string): fs.ReadStream {
    return fs.createReadStream(path.join(__dirname, '../../../../', filePath));
  }
}
