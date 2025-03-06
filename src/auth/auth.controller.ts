import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { AuthService } from './auth.service';
import {
  Authenticated,
  AuthenticatedUser,
  AuthenticatedUserToken,
} from './decorators';

import { User } from 'src/model';
import { ApiRequired } from 'src/rest/docs/decorator';
import { Whoami } from 'src/auth/model';

@Controller()
@ApiTags('Security')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Get('/whoami')
  @Authenticated()
  @ApiRequired({ operationId: "whoami", type: Whoami })
  async whoami(
    @AuthenticatedUser() user: User,
    @AuthenticatedUserToken() token: string,
  ) {
    return this.authService.whoami(user, token);
  }
}
