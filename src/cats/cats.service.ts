import { Injectable, Logger } from '@nestjs/common';
import { Cat, CatDocument } from './schemas/cat.schema';
import { CreateCatDto } from './dto/create-cat.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CatsService {
  private readonly logger = new Logger('CatsService');

  constructor(@InjectModel(Cat.name) private catModel: Model<CatDocument>) {}

  doSomething() {
    this.logger.log('Doing something...');
  }

  async create(createCatDto: CreateCatDto): Promise<Cat> {
    this.logger.log('create');
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save();
  }

  async findAll(): Promise<Cat[]> {
    this.logger.log('findAll');
    return this.catModel.find().exec();
  }

}
