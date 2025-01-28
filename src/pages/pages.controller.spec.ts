import { PagesController } from './pages.controller';
import { PagesService } from './pages.service';
import { NotFoundException } from '@nestjs/common';

describe('PagesController', () => {
  let pagesController: PagesController;
  let pageService: PagesService;

  beforeEach(() => {
    pageService = new PagesService();
    pagesController = new PagesController(pageService);
  });

  describe('getPages', () => {
    it('should return all pages', () => {
      const result = [
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
      expect(pagesController.getPages()).toEqual(result);
    });
  });

  describe('addPages', () => {
    it('should add and return a page', () => {
      const result = {
        title: 'Test Page 2',
        content: 'Content for page 2',
        category: 'Category 2',
        metadata: {
          description: 'Description 2',
          keywords: 'test,page2',
        },
      };

      expect(pagesController.addPages(result)).toEqual(result);
    });
  });

  describe('getPageById', () => {
    it('should return a page by id', () => {
      const result = {
        title: 'Test Page 1',
        content: 'Content for page 1',
        category: 'Category 1',
        metadata: {
          description: 'Description 1',
          keywords: 'test,page1',
        },
      };
      expect(pagesController.getPageById(0)).toEqual(result);
    });

    it('should throw NotFoundException if page not found', () => {
      expect(() => pagesController.getPageById(999)).toThrow(NotFoundException);
    });
  });

  describe('updatePage', () => {
    it('should update and return the page', () => {
      const updatePageDto = {
        content: 'Updated content for page 1',
      };

      const result = {
        title: 'Test Page 1',
        content: 'Updated content for page 1',
        category: 'Category 1',
        metadata: {
          description: 'Description 1',
          keywords: 'test,page1',
        },
      };

      expect(pagesController.updatePage(0, updatePageDto)).toEqual(result);
    });

    it('should throw NotFoundException if page not found for update', () => {
      const updatePageDto = {
        content: 'Updated content for page 1',
      };

      expect(() => pagesController.updatePage(999, updatePageDto)).toThrow(
        NotFoundException,
      );
    });
  });

  describe('deletePage', () => {
    it('should delete a page and return true', () => {
      expect(pagesController.deletePage(0)).toBe(true);
    });

    it('should throw NotFoundException if page not found for deletion', () => {
      expect(() => pagesController.deletePage(999)).toThrow(NotFoundException);
    });
  });
});
