import { Module } from '@nestjs/common';
import { ContentOwnerController } from './content-owner.controller';
import { ContentOwnerService } from 'src/services/content-owner/content-owner.service';
import { DbService } from 'src/util/db/db.service';

@Module({
  controllers: [ContentOwnerController],
  providers: [ContentOwnerService, DbService],
})
export class ContentOwnerModule {}
