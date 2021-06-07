import { Injectable, Logger } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly logger = new Logger('CatsService');
  private readonly cats: Cat[] = [];

  doSomething() {
    this.logger.log('Doing something...');
  }

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }

  find(name: string): Cat {
    return this.cats.find((c) => c.name == name);
  }
}
