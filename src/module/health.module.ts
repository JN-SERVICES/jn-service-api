import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Dummy } from 'src/model';
import { HealthController } from 'src/rest/endpoint';

@Module({
  imports: [TerminusModule, TypeOrmModule.forFeature([Dummy])],
  controllers: [HealthController],
})
export class HealthModule { }
