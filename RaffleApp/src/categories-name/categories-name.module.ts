import { Module } from '@nestjs/common';
import { CategoriesNameController } from './categories-name.controller';
import { CategoriesNameService } from './categories-name.service';

@Module({
  controllers: [CategoriesNameController],
  providers: [CategoriesNameService]
})
export class CategoriesNameModule {}
