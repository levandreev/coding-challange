import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { WordCounterService } from './word-counter.service';
import { Express } from 'express';

@Controller('word-counter')
export class WordCounterController {
  constructor(private readonly wordCounterService: WordCounterService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
  ): Promise<{ word: string; count: number }[]> {
    const fileContent = file.buffer.toString('utf8');
    return await this.wordCounterService.countWordsFromContent(fileContent);
  }
}
