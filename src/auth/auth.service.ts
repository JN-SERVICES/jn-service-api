import { Injectable } from "@nestjs/common";

import { Whoami } from "./model";
import { User } from "src/model";
import { UserMapper } from "src/rest/mapper";

@Injectable()
export class AuthService {
  constructor(
    private readonly userMapper: UserMapper,
  ) { }

  async whoami(user: User, token: string): Promise<Whoami> {
    const restUser = await this.userMapper.toRest(user);
    return { ...restUser, token };
  }
}
