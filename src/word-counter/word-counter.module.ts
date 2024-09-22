import { Module } from '@nestjs/common';
import { WordCounterService } from './word-counter.service';
import { WordCounterController } from './word-counter.controller';

@Module({
  providers: [WordCounterService],
  exports: [WordCounterService],
  controllers: [WordCounterController],
})
export class WordCounterModule {}
