import { LibCoreModule } from '@app/core';
import { LibNotificationModule } from '@app/notification';
import { Module } from '@nestjs/common';
import { ApiCoreModule } from './modules/core/core.module';

@Module({
  imports: [LibCoreModule, ApiCoreModule, LibNotificationModule],
  controllers: [],
  providers: [],
})
export class ApiModule {}
