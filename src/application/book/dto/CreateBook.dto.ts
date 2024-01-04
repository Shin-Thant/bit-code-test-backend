import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  content_owner_id: number;

  @IsNumber()
  @IsNotEmpty()
  publisher_id: number;

  @IsNumber()
  @Min(1)
  price: number;
}
