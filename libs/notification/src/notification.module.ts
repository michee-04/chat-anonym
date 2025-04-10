import { Module } from '@nestjs/common';
import { LibNotificationDomainModule } from './domain/domain.module';
import { LibNotificationInfrastructureModule } from './infrastructure/infrastructure.module';

@Module({
  providers: [LibNotificationDomainModule, LibNotificationInfrastructureModule],
  exports: [LibNotificationDomainModule, LibNotificationInfrastructureModule],
})
export class LibNotificationModule {}
