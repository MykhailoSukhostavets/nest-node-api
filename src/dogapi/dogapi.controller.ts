import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { DogapiService } from './dogapi.service';
import { DogImageResponse } from './entities/dogImage.entity';
import { ApiResponse, ApiBody, ApiTags } from '@nestjs/swagger';
import { DogBreedsResponse } from './entities/dogBreeds.entity';
import {
  DogQuizCheckResponse,
  DogQuizResponse,
} from './entities/dogQuiz.entity';
import { AnswerQuizDto } from './dto/answerQuiz.dto';

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

  @Get('quiz')
  @ApiResponse({ type: DogQuizResponse })
  async getQuiz(@Res() res): Promise<DogQuizResponse> {
    const data = await this.dogapiService.getNewQuiz();
    return res.status(200).json({ status: 'success', data: data });
  }

  @Get('quiz/:id')
  @ApiResponse({ type: DogQuizResponse })
  async getQuizById(@Param('id') id: string, @Res() res) {
    return res.status(200).json(await this.dogapiService.getQuiz(id));
  }

  @Post('quiz')
  @ApiBody({ type: AnswerQuizDto })
  @ApiResponse({ type: DogQuizCheckResponse })
  async checkQuiz(
    @Body() quiz: AnswerQuizDto,
    @Res() res,
  ): Promise<DogQuizCheckResponse> {
    const data = await this.dogapiService.answerQuiz(quiz);
    return res.status(200).json({ status: 'success', data: data });
  }
}
