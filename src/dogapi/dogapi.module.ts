import { Module } from '@nestjs/common';
import { DogapiService } from './dogapi.service';
import { DogapiController } from './dogapi.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Quiz, QuizSchema } from './schemas/quiz.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Quiz.name,
        schema: QuizSchema,
      },
    ]),
  ],
  providers: [DogapiService],
  controllers: [DogapiController],
})
export class DogapiModule {}
