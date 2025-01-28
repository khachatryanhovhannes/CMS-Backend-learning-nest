import { IsString, IsNotEmpty, IsObject } from 'class-validator';

export class CreatePageDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  @IsNotEmpty()
  readonly content: string;

  @IsString()
  @IsNotEmpty()
  readonly category: string;

  @IsObject()
  readonly metadata: {
    description: string;
    keywords: string;
  };
}
