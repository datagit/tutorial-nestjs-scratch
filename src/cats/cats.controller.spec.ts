import { Test } from '@nestjs/testing';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

describe('CatsController', () => {
  let catsController: CatsController;
  let catsService: CatsService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [CatsController],
      providers: [CatsService],
    }).compile();

    // catsService = moduleRef.get<CatsService>(CatsService);
    // catsController = moduleRef.get<CatsController>(CatsController);

    catsService = await moduleRef.resolve(CatsService);
    catsController = await moduleRef.resolve(CatsController);
  });

  describe('findAll', () => {
    it('should return an array of cats', async () => {
      let result: Cat[];
      jest.spyOn(catsService, 'findAll').mockImplementation(() => result);
      expect(await catsController.findAll()).toBe(result);
    });
  });
});
