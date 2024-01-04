import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { DbService } from 'src/util/db/db.service';

@Module({
  controllers: [BookController, DbService],
})
export class BookModule {}
