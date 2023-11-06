import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesNameController } from './categories-name.controller';

describe('CategoriesNameController', () => {
  let controller: CategoriesNameController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriesNameController],
    }).compile();

    controller = module.get<CategoriesNameController>(CategoriesNameController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
