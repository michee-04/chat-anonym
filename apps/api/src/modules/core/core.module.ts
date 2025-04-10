import { LibJournalModule } from '@app/journal';
import { LibUserAccessDomainModule } from '@app/user-access/domain/domain.module';
import { LibUserAccessInfrastructureModule } from '@app/user-access/infrastructure/infrastructure.module';
import { Module, ValidationPipe } from '@nestjs/common';
import { APP_GUARD, APP_PIPE } from '@nestjs/core';
import { AuthGuard } from './guards';
import { WinstonLogger } from './services/logger/winston';

@Module({
  imports: [
    LibUserAccessInfrastructureModule,
    LibUserAccessDomainModule,
    LibJournalModule,
  ],
  providers: [
    { provide: APP_GUARD, useClass: AuthGuard },
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        transform: true,
        whitelist: true,
      }),
    },
    WinstonLogger,
  ],
})
export class ApiCoreModule {}
