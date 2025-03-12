import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { FirebaseGuard, PersistedDbUserGuard } from './guards';
import { UserMapper } from 'src/rest/mapper';
import { User } from 'src/model';
import { FirebaseAppService, FirebaseAuthService } from 'src/service/firebase';
import { UserService } from 'src/service/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [AuthController],
  providers: [
    FirebaseAppService,
    FirebaseAuthService,
    AuthService,
    FirebaseGuard,
    PersistedDbUserGuard,
    UserMapper,
    UserService,
  ],
  exports: [FirebaseAuthService, UserService],
})
export class AuthModule {}
