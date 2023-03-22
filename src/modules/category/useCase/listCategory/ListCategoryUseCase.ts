import { inject, injectable } from "tsyringe";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";

@injectable()
export class ListCategoryUseCase {
  constructor(
    @inject("CategoryRepository")
    private categoryRepository: ICategoryRepository
  ) {}

  async execute(search?: string) {
    const categories = await this.categoryRepository.listAll(search);

    return categories;
  }
}
