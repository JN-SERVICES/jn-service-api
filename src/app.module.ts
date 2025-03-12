import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from './auth';
import { DatabaseModule, HealthModule } from './module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    TerminusModule,
    AuthModule,
    HealthModule,
  ],
})
export class AppModule {}
