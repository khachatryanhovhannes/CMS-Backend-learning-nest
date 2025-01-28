import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePageDto, UpdatePageDto } from './dto';

@Injectable()
export class PagesService {
  private readonly pages: CreatePageDto[] = [
    {
      title: 'Test Page 1',
      content: 'Content for page 1',
      category: 'Category 1',
      metadata: {
        description: 'Description 1',
        keywords: 'test,page1',
      },
    },
  ];

  addPage(createPageDto: CreatePageDto): CreatePageDto {
    this.pages.push(createPageDto);
    return createPageDto;
  }

  getAllPages() {
    return this.pages;
  }

  getPageById(id: number): CreatePageDto {
    const page = this.pages.find((page, index) => index === id);
    if (!page) {
      throw new NotFoundException('Page not found');
    }

    return page;
  }

  updatePage(id: number, updatePageDto: UpdatePageDto): CreatePageDto {
    const page = this.getPageById(id);
    const updatedPage = { ...page, ...updatePageDto } as CreatePageDto;
    return updatedPage;
  }

  deletePage(id: number): boolean {
    const index = this.pages.findIndex((page, index) => index === id);
    if (index === -1) {
      throw new NotFoundException('Page not found');
    }

    this.pages.splice(index, 1);
    return true;
  }
}
