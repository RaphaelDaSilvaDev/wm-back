import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";

@injectable()
export class EditCategoryUseCase {
  constructor(
    @inject("CategoryRepository")
    private categoryRepository: ICategoryRepository
  ) {}

  async execute(name: string, id: string) {
    const category = await this.categoryRepository.findById(id);

    if (!category) {
      throw new AppError("A categoria não foi encontrada");
    }

    if (name) category.name = name;
    const updatedCategory = await this.categoryRepository.editCategory(name, id);

    return updatedCategory;
  }
}
