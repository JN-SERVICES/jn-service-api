import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { FirebaseGuard } from './guards';
import { UserMapper } from 'src/rest/mapper';
import { User } from 'src/model';
import { FirebaseModule } from 'src/module/firebase';

@Module({
  imports: [TypeOrmModule.forFeature([User]), FirebaseModule],
  controllers: [AuthController],
  providers: [AuthService, FirebaseGuard, UserMapper],
})
export class AuthModule {}
