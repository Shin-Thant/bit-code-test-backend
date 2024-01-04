import { Controller, Get } from '@nestjs/common';
import { PublisherService } from 'src/services/publisher/publisher.service';

@Controller('publishers')
export class PublisherController {
  constructor(private readonly publisherService: PublisherService) {}

  @Get()
  async getAllPublishers() {
    return await this.publisherService.getAll();
  }
}
