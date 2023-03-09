import { inject, injectable } from "tsyringe";
import { IProductRepository } from "../../repositories/IProductRepository";

@injectable()
export class ListProductsUseCase {
  constructor(
    @inject("ProductRepository")
    private productRepository: IProductRepository
  ) {}

  async execute() {
    const products = await this.productRepository.listAll();

    return products;
  }
}
