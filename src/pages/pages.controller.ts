import { Controller } from '@nestjs/common';

@Controller('pages')
export class PagesController {
  getPages() {
    return 'Get all pages';
  }
  addPages() {
    return 'Add new page';
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
