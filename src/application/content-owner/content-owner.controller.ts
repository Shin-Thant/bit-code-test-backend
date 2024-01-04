import { Controller, Get } from '@nestjs/common';
import { ContentOwnerService } from 'src/services/content-owner/content-owner.service';

@Controller('content-owners')
export class ContentOwnerController {
  constructor(private readonly contentOwnerService: ContentOwnerService) {}

  @Get()
  async getAllContentOwners() {
    return await this.contentOwnerService.getAll();
  }
}
