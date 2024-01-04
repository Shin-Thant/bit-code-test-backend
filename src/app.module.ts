import { Module } from '@nestjs/common';
import { BookModule } from './application/book/book.module';
import { PublisherModule } from './application/publisher/publisher.module';
import { ContentOwnerModule } from './application/content-owner/content-owner.module';

@Module({
  imports: [BookModule, PublisherModule, ContentOwnerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
