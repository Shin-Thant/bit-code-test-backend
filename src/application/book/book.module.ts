import { BookService } from './../../services/book/book.service';
import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { DbService } from 'src/util/db/db.service';
import { PublisherService } from 'src/services/publisher/publisher.service';
import { ContentOwnerService } from 'src/services/content-owner/content-owner.service';
import { BookIdService } from 'src/util/book-id/book-id.service';

@Module({
  controllers: [BookController],
  providers: [
    BookService,
    PublisherService,
    ContentOwnerService,
    BookIdService,
    DbService,
  ],
})
export class BookModule {}
