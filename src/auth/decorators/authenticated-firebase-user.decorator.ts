import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const AuthenticatedFirebaseUser = createParamDecorator(
  (_data: unknown, context: ExecutionContext): string => {
    const request = context.switchToHttp().getRequest();
    return request.firebaseUser;
  },
);
