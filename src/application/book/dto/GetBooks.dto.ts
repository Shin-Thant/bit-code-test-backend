import { IsNumberString, IsOptional } from 'class-validator';

export class GetBooksDto {
  @IsNumberString()
  @IsOptional()
  page?: string;

  @IsNumberString()
  @IsOptional()
  pageSize?: string;
}
