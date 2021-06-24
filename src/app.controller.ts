import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  getHello(): string {
    return 'Hello World!';
  }

  @Get()
  getPhrase(): string {
    return this.appService.getPhrase();
  }
}
