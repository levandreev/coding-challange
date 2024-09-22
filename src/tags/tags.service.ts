import { Injectable } from '@nestjs/common';

interface Tag {
  documents: string[];
  subTags: Record<string, Tag>;
}

@Injectable()
export class TagsService {
  // dummy hardcoded database, should be moved to a real database
  private tags = {
    animals: {
      documents: ['uri1', 'uri2'],
      subTags: {
        mammals: {
          documents: ['uri3', 'uri4'],
          subTags: {
            primates: {
              documents: ['uri5'],
              subTags: {},
            },
            rodents: {
              documents: ['uri6'],
              subTags: {},
            },
          },
        },
        birds: {
          documents: ['uri7'],
          subTags: {
            raptors: {
              documents: ['uri8'],
              subTags: {},
            },
          },
        },
      },
    },
    technology: {
      documents: ['uri9'],
      subTags: {
        computers: {
          documents: ['uri10', 'uri11'],
          subTags: {
            laptops: {
              documents: ['uri12'],
              subTags: {},
            },
          },
        },
      },
    },
  };

  private gatherDocuments(tag: Tag): string[] {
    let documents = [...tag.documents];
    for (const subTagName in tag.subTags) {
      documents = documents.concat(
        this.gatherDocuments(tag.subTags[subTagName]),
      );
    }
    return documents;
  }

  getDocumentsByTag(tagName: string): string[] | null {
    const tag = this.tags[tagName];
    if (!tag) {
      return null;
    }
    return this.gatherDocuments(tag);
  }
}
