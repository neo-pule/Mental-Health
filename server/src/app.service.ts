import { Get, Injectable, Req } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return {msg: "Hello world"};
  }
  
}
