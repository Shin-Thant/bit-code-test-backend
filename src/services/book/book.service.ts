import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DbService } from 'src/util/db/db.service';

@Injectable()
export class BookService {
  constructor(private readonly db: DbService) {}

  async createBook(arg: Prisma.tbl_bookCreateArgs) {
    return await this.db.tbl_book.create(arg);
  }
}
