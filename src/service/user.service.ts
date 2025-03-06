import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '../model/user.entity';
import { Criteria } from './utils/criteria';
import { PaginationParams } from 'src/rest/decorator';
import { findByCriteria } from './utils/find-by-cireria';
import { UPDATED_AT_CREATED_AT_ORDER_BY } from './utils/default-order-by';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ) {}

  async findByEmail(email: string) {
    return this.repository.findOneBy({ email });
  }

  async findById(id: string) {
    return this.repository.findOneBy({ id });
  }

  async findAll(pagination: PaginationParams, criteria: Criteria<User>) {
    return findByCriteria<User>({
      repository: this.repository,
      criteria,
      pagination,
      order: UPDATED_AT_CREATED_AT_ORDER_BY,
    });
  }
}
