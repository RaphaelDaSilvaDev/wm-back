import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ICreateProduct } from "../../interfaces/ICreateProduct";
import { IProductRepository } from "../../repositories/IProductRepository";

@injectable()
export class CreateProductUseCase {
  constructor(
    @inject("ProductRepository")
    private productRepository: IProductRepository
  ) {}

  async execute(data: ICreateProduct) {
    const findProduct = await this.productRepository.findByName(data.name);

    if (findProduct) {
      throw new AppError("Este produto já existe!");
    }

    const product = await this.productRepository.create(data);

    return product;
  }
}
