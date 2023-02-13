import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class AnswerQuizDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsNumber()
  @IsNotEmpty()
  answer: number;
}
