import { Controller, Get ,Req, HttpCode} from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('singleget')
  @HttpCode(204)
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('getAll')
  getHelloworld(@Req() req:Request): string {
    // console.log("pp",req)
    return this.appService.getHelloworld();
  }
}
