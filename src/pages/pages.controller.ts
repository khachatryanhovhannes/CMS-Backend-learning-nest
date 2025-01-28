import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { CreatePageDto } from './dto';
import { PagesService } from './pages.service';

@Controller('pages')
export class PagesController {
  constructor(private readonly pageService: PagesService) {}

  @Get()
  getPages() {
    return this.pageService.getAllPages();
  }

  @Post()
  addPages(@Body(ValidationPipe) createPageDto: CreatePageDto) {
    return this.pageService.addPage(createPageDto);
  }

  getPageById(id: number) {
    return `Get page by id: ${id}`;
  }

  updatePage(id: number) {
    return `Update page by id: ${id}`;
  }

  deletePage(id: number) {
    return `Delete page by id: ${id}`;
  }
}
