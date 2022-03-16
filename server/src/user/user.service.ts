import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonsRepository } from '../entities/Persons.repository';

@Injectable()
export class UserService {
  
  constructor(@InjectRepository(PersonsRepository) private personRepo: PersonsRepository){}

  async getAllPersons() {
      return await this.personRepo.find({ select: 
        ['PersonID','FirstName','LastName','Address','City'] });
  }
  async addPerson(person: any) {
        
    try{
        console.log(person)
        return await this.personRepo.save(person);
     }
     catch(err){
        throw new HttpException(err, HttpStatus.BAD_REQUEST);
     }
}
    run(): string {
        return 'Mental Health server connected..';
      }
}
