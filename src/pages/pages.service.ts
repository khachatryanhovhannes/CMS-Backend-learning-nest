import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePageDto, UpdatePageDto } from './dto';

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

  updatePage(id: number, updatePageDto: UpdatePageDto) {
    const page = this.getPageById(id);
    Object.assign(page, updatePageDto);
    return page;
  }

  deletePage(id: number) {
    const index = this.pages.findIndex((page, index) => index === id);
    if (index === -1) {
      throw new NotFoundException('Page not found');
    }

    this.pages.splice(index, 1);
    return true;
  }
}
