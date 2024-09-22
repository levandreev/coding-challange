import { Injectable } from '@nestjs/common';

@Injectable()
export class WordCounterService {
  async countWordsFromContent(
    content: string,
  ): Promise<{ word: string; count: number }[]> {
    const wordCounts = this.countWords(content);
    return this.sortWordCounts(wordCounts);
  }

  private countWords(text: string): Record<string, number> {
    const words = text.toLowerCase().match(/\b[a-z]+\b/g);
    const wordCounts: Record<string, number> = {};

    if (words) {
      words.forEach((word) => {
        wordCounts[word] = (wordCounts[word] || 0) + 1;
      });
    }

    return wordCounts;
  }

  private sortWordCounts(
    wordCounts: Record<string, number>,
  ): { word: string; count: number }[] {
    return Object.entries(wordCounts)
      .map(([word, count]) => ({ word, count }))
      .sort((a, b) => {
        if (b.count === a.count) {
          return a.word.localeCompare(b.word);
        }
        return b.count - a.count;
      });
  }
}
