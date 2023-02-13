import { ApiProperty } from '@nestjs/swagger';

export class DogImageResponse {
  @ApiProperty({
    description: 'The status of the response',
    example: 'success',
  })
  status: string;

  @ApiProperty({
    description: 'The message returned from the API',
    example: 'https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg',
  })
  message: string;
}
