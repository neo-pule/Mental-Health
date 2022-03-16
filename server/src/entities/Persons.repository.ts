import { Persons } from "./persons.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Persons)
export class PersonsRepository extends Repository<Persons> {}