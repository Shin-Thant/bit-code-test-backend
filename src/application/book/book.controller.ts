import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { BookService } from 'src/services/book/book.service';
import { ContentOwnerService } from 'src/services/content-owner/content-owner.service';
import { PublisherService } from 'src/services/publisher/publisher.service';
import { BookIdService } from 'src/util/book-id/book-id.service';
import {
  CreateBookDto,
  DeleteBookDto,
  GetBooksDto,
  UpdateBookBodyDto,
  UpdateBookParamDto,
} from './dto';

@Controller('books')
export class BookController {
  constructor(
    private readonly bookService: BookService,
    private readonly contentOwnerService: ContentOwnerService,
    private readonly publisherService: PublisherService,
    private readonly bookIDService: BookIdService,
  ) {}

  @Get()
  async getBooks(@Query() _: GetBooksDto) {
    // const current: number = parseInt(query.page ?? '1');
    // const size: number = parseInt(query.pageSize ?? '10');

    const books = await this.bookService.getManyBooks({
      orderBy: { created_timetick: 'desc' },
      // take: size,
      // skip: (current - 1) * size,
      select: {
        idx: true,
        price: true,
        cover_photo: true,
        book_uniq_idx: true,
        bookname: true,
        content_owner: true,
        publisher: true,
        created_timetick: true,
      },
    });

    return books;
  }

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

  @Put(':bookID')
  async updateBook(
    @Param() param: UpdateBookParamDto,
    @Body() body: UpdateBookBodyDto,
  ) {
    if (!Object.keys(body).length) {
      throw new BadRequestException('Update body cannot be empty!');
    }

    const foundBook = await this.bookService.findUnique({
      where: { idx: parseInt(param.bookID) },
    });
    if (!foundBook) {
      throw new BadRequestException('Book not found!');
    }

    if (!!body.content_owner_id) {
      const foundContentOwner = await this.contentOwnerService.findUnique({
        where: { idx: body.content_owner_id },
      });
      if (!foundContentOwner) {
        throw new BadRequestException('Invalid content owner ID!');
      }
    }

    if (!!body.publisher_id) {
      const foundPublisher = await this.publisherService.findUnique({
        where: { idx: body.publisher_id },
      });
      if (!foundPublisher) {
        throw new BadRequestException('Invalid publisher ID!');
      }
    }

    const updateResult = await this.bookService.updateBook({
      where: { idx: parseInt(param.bookID) },
      data: {
        bookname: body.name,
        co_id: body.content_owner_id,
        publisher_id: body.publisher_id,
        price: body.price,
      },
    });

    return updateResult;
  }

  @Delete(':bookID')
  async deleteBook(@Param() param: DeleteBookDto) {
    const foundBook = await this.bookService.findUnique({
      where: { idx: parseInt(param.bookID) },
    });
    if (!foundBook) {
      throw new BadRequestException('Book not found!');
    }

    await this.bookService.deleteBook({
      where: { idx: parseInt(param.bookID) },
    });
    return { message: 'Book deleted successfully!' };
  }
}
