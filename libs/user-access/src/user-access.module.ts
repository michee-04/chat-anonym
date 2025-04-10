import { Module } from '@nestjs/common';
import { LibUserAccessDomainModule } from './domain/domain.module';
import { LibUserAccessInfrastructureModule } from './infrastructure/infrastructure.module';

@Module({
  providers: [LibUserAccessDomainModule, LibUserAccessInfrastructureModule],
  exports: [LibUserAccessDomainModule, LibUserAccessInfrastructureModule],
})
export class LibUserAccessModule {}
