import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ICreateCategory } from "../../interfaces/ICreateCategory";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";

@injectable()
export class CreateCategoryUseCase {
  constructor(
    @inject("CategoryRepository")
    private categoryRepository: ICategoryRepository
  ) {}

  async execute({ name }: ICreateCategory) {
    const category = await this.categoryRepository.findByName(name);

    if (category) {
      throw new AppError("Essa categoria já existe!");
    }

    const newCategory = await this.categoryRepository.create({ name });

    return newCategory;
  }
}
