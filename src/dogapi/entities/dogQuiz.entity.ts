import { ApiProperty } from '@nestjs/swagger';

export class DogQuizResponse {
  @ApiProperty({
    description: 'The status of the response',
    example: 'success',
  })
  status: string;

  @ApiProperty({
    description: 'Quiz data, including image and breeds',
    example: `{
      "image": "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
      "breeds": [
          "afghan",
          "basset",
          "blood"
      ]
    }`,
  })
  data: {
    image: string;
    breeds: string[];
  };
}

export class DogQuizCheckResponse {
  @ApiProperty({
    description: 'The status of the response',
    example: 'success',
  })
  status: string;

  @ApiProperty({
    description: 'Whether the answer was correct or not',
    example: `{
      "correct": true
    }`,
  })
  data: {
    correct: boolean;
  };
}
