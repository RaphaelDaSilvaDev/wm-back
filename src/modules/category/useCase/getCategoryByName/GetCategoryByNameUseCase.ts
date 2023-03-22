import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";

@injectable()
export class GetCategoryByNameUseCase {
  constructor(
    @inject("CategoryRepository")
    private categoryRepository: ICategoryRepository
  ) {}

  async execute(name: string) {
    const category = await this.categoryRepository.findByName(name);

    if (!category) {
      throw new AppError("A categoria não foi encontrada!");
    }

    return category;
  }
}
