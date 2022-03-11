import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private user: UserService) {}

    @Get()
    test(): string {
      return this.user.run();
    }
}
