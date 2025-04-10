import { NestFactory } from '@nestjs/core';
import { WebAdminModule } from './web-admin.module';

async function bootstrap() {
  const app = await NestFactory.create(WebAdminModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
