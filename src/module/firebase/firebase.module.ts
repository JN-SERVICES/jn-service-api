import { Module } from '@nestjs/common';

import { FirebaseAppService } from './firebase-app';
import { FirebaseAuthService } from './firebase-auth';

@Module({
  exports: [FirebaseAuthService],
  providers: [FirebaseAppService, FirebaseAuthService],
})
export class FirebaseModule {}
