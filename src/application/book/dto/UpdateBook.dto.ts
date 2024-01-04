import {
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export class UpdateBookParamDto {
  @IsNumberString()
  @IsNotEmpty()
  bookID: string;
}

export class UpdateBookBodyDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsNumber()
  @IsOptional()
  content_owner_id?: number;

  @IsNumber()
  @IsOptional()
  publisher_id?: number;

  @IsNumber()
  @Min(1)
  @IsOptional()
  price?: number;
}
