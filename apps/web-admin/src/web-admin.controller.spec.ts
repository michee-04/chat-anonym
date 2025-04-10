import { Test, TestingModule } from '@nestjs/testing';
import { WebAdminController } from './web-admin.controller';
import { WebAdminService } from './web-admin.service';

describe('WebAdminController', () => {
  let webAdminController: WebAdminController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [WebAdminController],
      providers: [WebAdminService],
    }).compile();

    webAdminController = app.get<WebAdminController>(WebAdminController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(webAdminController.getHello()).toBe('Hello World!');
    });
  });
});
