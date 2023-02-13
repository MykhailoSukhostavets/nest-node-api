import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type QuizDocument = Quiz & Document;

@Schema({
  timestamps: { createdAt: 'created', updatedAt: 'updated' },
})
export class Quiz {
  @Prop({ required: true })
  image: string;

  @Prop({ required: true })
  breeds: string[];

  @Prop({ required: true })
  correctIndex: number;
}

export const QuizSchema = SchemaFactory.createForClass(Quiz);
