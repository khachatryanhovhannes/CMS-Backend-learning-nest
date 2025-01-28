import { Injectable } from '@nestjs/common';
import { CreatePageDto } from './dto';

@Injectable()
export class PagesService {
  private readonly pages: CreatePageDto[] = [];

  addPage(createPageDto: CreatePageDto) {
    this.pages.push(createPageDto);
  }
}
