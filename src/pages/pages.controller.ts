import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreatePageDto, UpdatePageDto } from './dto';
import { PagesService } from './pages.service';

@Controller('pages')
export class PagesController {
  constructor(private readonly pageService: PagesService) {}

  @Get()
  getPages(): CreatePageDto[] {
    return this.pageService.getAllPages();
  }

  @Post()
  addPages(@Body() createPageDto: CreatePageDto): CreatePageDto {
    return this.pageService.addPage(createPageDto);
  }

  @Get(':id')
  getPageById(@Param('id', ParseIntPipe) id: number): CreatePageDto {
    return this.pageService.getPageById(id);
  }

  @Put(':id')
  updatePage(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePageDto: UpdatePageDto,
  ): CreatePageDto {
    return this.pageService.updatePage(id, updatePageDto);
  }

  @Delete(':id')
  deletePage(@Param('id', ParseIntPipe) id: number): boolean {
    return this.pageService.deletePage(id);
  }
}
