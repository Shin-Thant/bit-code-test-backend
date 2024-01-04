import { Controller, Post } from '@nestjs/common';
import { BookService } from 'src/services/book/book.service';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  async createBook() {}
}
