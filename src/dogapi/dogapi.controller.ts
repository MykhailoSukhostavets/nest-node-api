import { Controller, Get, Res } from '@nestjs/common';
import { DogapiService } from './dogapi.service';
import { DogImageResponse } from './entities/dogImage.entity';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { DogBreedsResponse } from './entities/dogBreeds.entity';

@ApiTags('dogs')
@Controller('dog')
export class DogapiController {
  constructor(private readonly dogapiService: DogapiService) {}

  @Get('random')
  @ApiResponse({ type: DogImageResponse })
  async getRandomImage(@Res() res): Promise<DogImageResponse> {
    const randomImage = await this.dogapiService.getRandomImage();
    return res.status(200).json({ status: 'success', message: randomImage });
  }

  @Get('breeds')
  @ApiResponse({ type: DogBreedsResponse })
  async getBreedsList(@Res() res): Promise<DogBreedsResponse> {
    const breedsList = await this.dogapiService.getBreedsList();
    return res.status(200).json({ status: 'success', message: breedsList });
  }
}
