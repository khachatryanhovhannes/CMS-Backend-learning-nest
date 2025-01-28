import { Injectable } from '@nestjs/common';
import { CreatePageDto } from './dto';

@Injectable()
export class PagesService {
  private readonly pages: CreatePageDto[] = [
    {
      title: 'Default Page Title',
      content: 'This is the default content for the page.',
      category: 'General',
      metadata: {
        description: 'Default page description',
        keywords: 'default, page, content',
      },
    },
  ];

  addPage(createPageDto: CreatePageDto) {
    this.pages.push(createPageDto);
    return createPageDto;
  }

  getAllPages() {
    return this.pages;
  }
}
