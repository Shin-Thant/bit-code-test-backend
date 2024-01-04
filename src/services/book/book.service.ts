import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DbService } from 'src/util/db/db.service';

@Injectable()
export class BookService {
  constructor(private readonly db: DbService) {}

  async createBook(arg: Prisma.tbl_bookCreateArgs) {
    return await this.db.tbl_book.create(arg);
  }

  async findUnique(arg: Prisma.tbl_bookFindUniqueArgs) {
    return await this.db.tbl_book.findUnique(arg);
  }

  async updateBook(arg: Prisma.tbl_bookUpdateArgs) {
    return await this.db.tbl_book.update(arg);
  }

  async deleteBook(arg: Prisma.tbl_bookDeleteArgs) {
    return await this.db.tbl_book.delete(arg);
  }
}
