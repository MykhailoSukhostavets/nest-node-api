import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { DogImageResponse } from './entities/dogImage.entity';

@Injectable()
export class DogapiService {
  private readonly axiosInstance = axios.create({
    baseURL: 'https://dog.ceo/api',
  });

  async getRandomImage(): Promise<string> {
    const res = await this.axiosInstance.get<DogImageResponse>(
      '/breeds/image/random',
    );
    return res.data.message;
  }

  async getBreedsList(): Promise<string> {
    const res = await this.axiosInstance.get<DogImageResponse>(
      '/breeds/list/all',
    );
    return res.data.message;
  }
}
