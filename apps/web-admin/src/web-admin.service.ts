import { Injectable } from '@nestjs/common';

@Injectable()
export class WebAdminService {
  getHello(): string {
    return 'Hello World!';
  }
}
