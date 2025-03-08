import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from './auth';
import { DatabaseModule, HealthModule } from './module';
import { FirebaseModule } from './module/firebase';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    TerminusModule,
    FirebaseModule,
    AuthModule,
    HealthModule,
  ],
})
export class AppModule {}
