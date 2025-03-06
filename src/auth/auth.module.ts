import { Module } from '@nestjs/common';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { FirebaseGuard } from './guards';
import { UserMapper } from 'src/rest/mapper';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/model';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [AuthController],
  providers: [AuthService, FirebaseGuard, UserMapper],
})
export class AuthModule {}
