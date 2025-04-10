import { Controller, Get } from '@nestjs/common';
import { WebAdminService } from './web-admin.service';

@Controller()
export class WebAdminController {
  constructor(private readonly webAdminService: WebAdminService) {}

  @Get()
  getHello(): string {
    return this.webAdminService.getHello();
  }
}
