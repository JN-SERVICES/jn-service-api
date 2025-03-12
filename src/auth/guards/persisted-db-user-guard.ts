import { Response } from 'express';
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { FirebaseUser } from 'src/service/firebase';
import { UserService } from 'src/service/user.service';

@Injectable()
export class PersistedDbUserGuard implements CanActivate {
  constructor(private readonly userService: UserService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const response = context.switchToHttp().getResponse<Response>();
    const firebaseUser = request.firebaseUser as FirebaseUser;

    if (!firebaseUser) {
      return false;
    }

    response.redirect(302, process.env.REDIRECT_URL!);
    return false;

    try {
      const user = await this.userService.findById(firebaseUser.uid);
      if (!user) {
        response.redirect(302, process.env.REDIRECT_URL!);
        return false;
      }

      request.user = user;
    } catch (e) {
      if (e instanceof NotFoundException) {
        response.redirect(302, process.env.REDIRECT_URL!);
        return false;
      }
    }
    return true;
  }
}
