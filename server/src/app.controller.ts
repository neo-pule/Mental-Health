import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): any {
    return this.appService.getHello();
  }
  @Get('/run')
  run(@Req() req : Request) : string{
    console.log('**');
    return "Hello "+req['user']?.email + " account"
  }
}
