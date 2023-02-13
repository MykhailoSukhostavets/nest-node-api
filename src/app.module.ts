import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppLoggerMiddleware } from './middleware/logger.middleware';
import { DogapiModule } from './dogapi/dogapi.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGODB_URL), DogapiModule],
})
export class AppModule {
  // Register the middleware for all routes
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(AppLoggerMiddleware).forRoutes('*');
  }
}
