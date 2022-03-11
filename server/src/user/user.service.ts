import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

    run(): string {
        return 'Mental Health server connected..';
      }
}
