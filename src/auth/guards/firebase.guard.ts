import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";

@Injectable()
export class FirebaseGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    request.user = {} // user;
    request.token = "token" // token;

    return true;
  }
}
