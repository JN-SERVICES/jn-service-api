import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { FirebaseAuthService } from 'src/service/firebase';

@Injectable()
export class FirebaseGuard implements CanActivate {
  constructor(private readonly firebaseAuthService: FirebaseAuthService) {}
  private static BEARER_TOKEN_TYPE = 'Bearer';

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    try {
      const token = await this.extractBearerToken(request);
      const { email } = await this.firebaseAuthService.verifyTokenId(token);
      const firebaseUser = await this.firebaseAuthService.findUserByEmail(
        email!,
      );

      request.firebaseUser = firebaseUser;
      request.token = token;
      return true;
    } catch (e) {
      if (e instanceof ForbiddenException) {
        return false;
      }
    }
    return true;
  }

  async extractBearerToken(req: Request): Promise<string> {
    const authHeader = req.headers['authorization'] ?? '';
    const [tokenType, tokenValue] = authHeader.split(' ');

    if (tokenType !== FirebaseGuard.BEARER_TOKEN_TYPE) {
      throw new ForbiddenException();
    }

    return tokenValue;
  }
}
