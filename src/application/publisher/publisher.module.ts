import { Module } from '@nestjs/common';
import { PublisherController } from './publisher.controller';
import { PublisherService } from 'src/services/publisher/publisher.service';
import { DbService } from 'src/util/db/db.service';

@Module({
  controllers: [PublisherController],
  providers: [PublisherService, DbService],
})
export class PublisherModule {}
