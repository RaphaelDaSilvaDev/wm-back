import { inject, injectable } from "tsyringe";
import { IProductRepository } from "../../repositories/IProductRepository";

@injectable()
export class ListProductsUseCase {
  constructor(
    @inject("ProductRepository")
    private productRepository: IProductRepository
  ) {}

  async execute(search?: string) {
    const products = await this.productRepository.listAll(search);
    const productsWithAmount = products.map((item) => {
      return { ...item, amount: null };
    });

    return productsWithAmount;
  }
}
