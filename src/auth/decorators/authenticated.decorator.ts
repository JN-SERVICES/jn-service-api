import { UseGuards, applyDecorators } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';

import { FirebaseGuard, PersistedDbUserGuard } from '../guards';

//Add attribute checkInDb and only if true, we add the PersistedDbUserGuard
export function Authenticated() {
  return applyDecorators(
    UseGuards(FirebaseGuard, PersistedDbUserGuard),
    ApiBearerAuth(),
  );
}
