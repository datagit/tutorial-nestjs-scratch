import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { CreateCatDto } from './dto/create-cat.dto';
import { Controller, Get, Post, Body, Logger } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  private readonly logger = new Logger('CatsController');
  constructor(private readonly catsService: CatsService) { }


  @Get()
  async findAll(): Promise<Cat[]> {
    this.logger.log('findAll...');
    this.catsService.doSomething();
    return this.catsService.findAll();
  }

  @Post()
  async create(@Body() createCatDto: CreateCatDto): Promise<string> {
    this.logger.log('create...');
    this.logger.log(createCatDto);
    console.log(createCatDto);
    this.catsService.create(createCatDto);
    return 'created';
  }

}
