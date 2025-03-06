import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { User as EntityUser } from "src/model";
import { User } from "../model";

@Injectable()
export class UserMapper {
  constructor(
    @InjectRepository(EntityUser)
    private readonly userRepository: Repository<EntityUser>
  ) { }

  async toRest(user: EntityUser): Promise<User> {
    return { ...user };
  }

  async toDomain(user: User): Promise<EntityUser> {
    return this.userRepository.create(user);
  }
}
