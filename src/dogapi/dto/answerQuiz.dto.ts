import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class AnswerQuizDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Id of the quiz',
    example: '63ea4a235717c11d89691016',
  })
  id: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Index of the answer: 0, 1 or 2',
    example: '1',
  })
  answer: number;
}
