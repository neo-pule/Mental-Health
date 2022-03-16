import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private user: UserService) {}

    @Get()
    test(): string {
      return this.user.run();
    }
    @Get('/person')
    go() {
      return this.user.getAllPersons();
    }
    @Post('/')
    async add(@Body() person: any) {
        return await this.user.addPerson(person);
    }
}
