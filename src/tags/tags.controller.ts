import { Controller, Get, Query, NotFoundException } from '@nestjs/common';
import { TagsService } from './tags.service';

@Controller('taggedContent')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Get()
  getDocuments(@Query('tag') tag: string): { documents: string[] } {
    const documents = this.tagsService.getDocumentsByTag(tag);
    if (!documents) {
      throw new NotFoundException(`Tag ${tag} not found`);
    }
    return { documents };
  }
}
