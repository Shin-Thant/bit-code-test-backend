import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DbService } from 'src/util/db/db.service';

@Injectable()
export class PublisherService {
  constructor(private readonly db: DbService) {}

  async findUnique(arg: Prisma.content_ownerFindUniqueArgs) {
    return await this.db.content_owner.findUnique(arg);
  }
}
