import { inject, injectable } from "tsyringe";
import { IAlterQuantityProduct } from "../../interfaces/IAlterQuantityProduct";
import { IProductRepository } from "../../repositories/IProductRepository";
import { AppError } from "../../../../shared/errors/AppError";

@injectable()
export class AlterQuantityProductUseCase {
  constructor(
    @inject("ProductRepository")
    private productRepository: IProductRepository
  ) {}

  async execute({ id, quantity }: IAlterQuantityProduct) {
    const product = await this.productRepository.findById(id);

    if (!product) {
      throw new AppError("Produto não encontrado!");
    }

    const newQuantity = (product.quantity += quantity);

    const newProduct = await this.productRepository.editProduct({ quantity: newQuantity }, id);

    return newProduct;
  }
}
