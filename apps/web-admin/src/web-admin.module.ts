import { Module } from '@nestjs/common';
import { WebAdminController } from './web-admin.controller';
import { WebAdminService } from './web-admin.service';

@Module({
  imports: [],
  controllers: [WebAdminController],
  providers: [WebAdminService],
})
export class WebAdminModule {}
