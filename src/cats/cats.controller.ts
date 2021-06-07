import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { CreateCatDto } from './dto/create-cat.dto';
import { Controller, Get, Post, Body } from '@nestjs/common';
import {
  validate,
  validateOrReject,
  Contains,
  IsInt,
  Length,
  IsEmail,
  IsFQDN,
  IsDate,
  Min,
  Max,
} from 'class-validator';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) { }


  @Get()
  async findAll(): Promise<Cat[]> {
    console.log('findAll');
    return this.catsService.findAll();
  }

  @Post()
  async create(@Body() createCatDto: CreateCatDto): Promise<string> {
    console.log('create');
    console.log(createCatDto);
    this.catsService.create(createCatDto);
    return 'created';
  }

}
