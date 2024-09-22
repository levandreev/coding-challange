import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphModule } from './graph/graph.module';
import { WordCounterService } from './word-counter/word-counter.service';
import { WordCounterModule } from './word-counter/word-counter.module';
import { TagsModule } from './tags/tags.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    GraphModule,
    WordCounterModule,
    TagsModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],

  controllers: [AppController],
  providers: [AppService, WordCounterService],
})
export class AppModule {}
