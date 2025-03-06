import { Controller, Get } from '@nestjs/common';
import {
  HealthCheck,
  HealthCheckService,
  TypeOrmHealthIndicator,
} from '@nestjs/terminus';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Dummy } from 'src/model';

@Controller()
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private db: TypeOrmHealthIndicator,
    @InjectRepository(Dummy)
    private readonly dummyRepository: Repository<Dummy>,
  ) {}

  @Get('/ping')
  @HealthCheck()
  checkPing() {
    return { message: 'pong' };
  }

  @Get('/db/health')
  @HealthCheck()
  checkHealth() {
    return this.health.check([() => this.db.pingCheck('database')]);
  }

  @Get('/dummies')
  async findAll(): Promise<Dummy[]> {
    return this.dummyRepository.find();
  }
}
