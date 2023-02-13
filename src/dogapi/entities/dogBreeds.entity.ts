import { ApiProperty } from '@nestjs/swagger';

export class DogBreedsResponse {
  @ApiProperty({
    description: 'The status of the response',
    example: 'success',
  })
  status: string;

  @ApiProperty({
    description: 'The message returned from the API',
    example: `{
      "affenpinscher": [],
      "african": [],
      "airedale": [],
      "akita": [],
      "appenzeller": [],
      "australian": [
          "shepherd"
      ]
    }`,
  })
  message: { [s: string]: string[] };
}
