import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { DogImageResponse } from './entities/dogImage.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateQuizDto } from './dto/createQuiz.dto';
import { Quiz, QuizDocument } from './schemas/quiz.schema';
import { AnswerQuizDto } from './dto/answerQuiz.dto';

@Injectable()
export class DogapiService {
  constructor(
    @InjectModel(Quiz.name) private readonly quizModel: Model<QuizDocument>,
  ) {}

  private readonly axiosInstance = axios.create({
    baseURL: 'https://dog.ceo/api',
  });

  async getRandomImage(): Promise<string> {
    const res = await this.axiosInstance.get<DogImageResponse>(
      '/breeds/image/random',
    );
    return res.data.message;
  }

  async getRandomImageByBreed(breed: string): Promise<string> {
    const res = await this.axiosInstance.get<DogImageResponse>(
      `/breed/${breed}/images/random`,
    );
    return res.data.message;
  }

  async getBreedsList(): Promise<string> {
    const res = await this.axiosInstance.get<DogImageResponse>(
      '/breeds/list/all',
    );
    return res.data.message;
  }

  async saveQuiz(quiz: CreateQuizDto): Promise<QuizDocument> {
    const newQuiz = new this.quizModel(quiz);
    return newQuiz.save();
  }

  getQuiz(id: string) {
    return this.quizModel.findById(id);
  }

  // Quiz will contain 1 image 3 breeds, 1 correct and 2 incorrect answers
  async getNewQuiz() {
    // Get all breeds
    const breedsList = await this.getBreedsList();
    // Get random 3 breeds
    const randomBreeds = [];
    while (randomBreeds.length < 3) {
      const randomBreed =
        Object.keys(breedsList)[
          Math.floor(Math.random() * Object.keys(breedsList).length)
        ];
      if (!randomBreeds.includes(randomBreed)) {
        randomBreeds.push(randomBreed);
      }
    }

    // Choose correct breed
    const index = Math.floor(Math.random() * 3);
    const randomBreed = randomBreeds[index];

    // Get random image of that breed
    const randomImage = await this.getRandomImageByBreed(randomBreed);

    // Save quiz
    const savedObject = await this.saveQuiz({
      image: randomImage,
      breeds: randomBreeds,
      correctIndex: index,
    });

    // Return the quiz
    return {
      id: savedObject._id,
      image: randomImage,
      breeds: randomBreeds,
    };
  }

  async answerQuiz({ id, answer }: AnswerQuizDto) {
    const quiz = await this.quizModel.findById(id);

    const correct = quiz?.correctIndex === answer;

    return { correct };
  }
}
