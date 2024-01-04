import { IsNotEmpty, IsNumberString } from 'class-validator';

export class DeleteBookDto {
  @IsNumberString()
  @IsNotEmpty()
  bookID: string;
}
