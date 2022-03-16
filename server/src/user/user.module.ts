import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { PersonsRepository } from '../entities/Persons.repository';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([PersonsRepository])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
