import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { BookService } from 'src/services/book/book.service';
import { CreateBookDto } from './dto';
import { ContentOwnerService } from 'src/services/content-owner/content-owner.service';
import { PublisherService } from 'src/services/publisher/publisher.service';
import { BookIdService } from 'src/util/book-id/book-id.service';

@Controller('books')
export class BookController {
  constructor(
    private readonly bookService: BookService,
    private readonly contentOwnerService: ContentOwnerService,
    private readonly publisherService: PublisherService,
    private readonly bookIDService: BookIdService,
  ) {}

  @Post()
  async createBook(@Body() body: CreateBookDto) {
    const foundContentOwner = await this.contentOwnerService.findUnique({
      where: { idx: body.content_owner_id },
    });
    if (!foundContentOwner) {
      throw new BadRequestException('Invalid content owner ID!');
    }

    const foundPublisher = await this.publisherService.findUnique({
      where: { idx: body.publisher_id },
    });
    if (!foundPublisher) {
      throw new BadRequestException('Invalid publisher ID!');
    }

    return await this.bookService.createBook({
      data: {
        bookname: body.name,
        book_uniq_idx: this.bookIDService.generateUniqueBookID(),
        co_id: body.content_owner_id,
        publisher_id: body.publisher_id,
        cover_photo: '',
        price: body.price,
      },
    });
  }
}
