import { Injectable, NotFoundException } from '@nestjs/common';
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

  getPageById(id: number) {
    const page = this.pages.find((page, index) => index === id);
    if (!page) {
      throw new NotFoundException('Page not found');
    }

    return page;
  }
}
