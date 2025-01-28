import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
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
  addPages(@Body() createPageDto: CreatePageDto) {
    return this.pageService.addPage(createPageDto);
  }

  @Get(':id')
  getPageById(@Param('id', ParseIntPipe) id: number) {
    return this.pageService.getPageById(id);
  }

  updatePage(id: number) {
    return `Update page by id: ${id}`;
  }

  deletePage(id: number) {
    return `Delete page by id: ${id}`;
  }
}
