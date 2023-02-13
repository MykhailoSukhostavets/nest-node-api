import { IsString, IsNotEmpty, IsNumber, IsArray } from 'class-validator';

export class CreateQuizDto {
  @IsString()
  @IsNotEmpty()
  image: string;

  @IsArray()
  @IsNotEmpty()
  breeds: string[];

  @IsNumber()
  @IsNotEmpty()
  correctIndex: number;
}
