import { UseGuards, applyDecorators } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';

import { FirebaseGuard } from '../guards';

export function Authenticated() {
  return applyDecorators(UseGuards(FirebaseGuard), ApiBearerAuth());
}
