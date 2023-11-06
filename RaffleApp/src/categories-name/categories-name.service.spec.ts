import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesNameService } from './categories-name.service';

describe('CategoriesNameService', () => {
  let service: CategoriesNameService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoriesNameService],
    }).compile();

    service = module.get<CategoriesNameService>(CategoriesNameService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
