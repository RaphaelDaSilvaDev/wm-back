import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ICreateProduct } from "../../interfaces/ICreateProduct";
import { IEditProduct } from "../../interfaces/IEditProduct";
import { IProductRepository } from "../../repositories/IProductRepository";

@injectable()
export class EditProductUseCase {
  constructor(
    @inject("ProductRepository")
    private productRepository: IProductRepository
  ) {}

  async execute(
    {
      brand,
      barCode,
      categoryId,
      description,
      minQuantity,
      name,
      quantity,
      valueToBuy,
      valueToSell
    }: IEditProduct,
    id: string
  ) {
    const product = await this.productRepository.findById(id);

    if (!product) {
      throw new AppError("Produto não encontrado!");
    }

    if (brand) product.brand = brand;
    if (barCode) product.barCode = barCode;
    if (categoryId) product.categoryId = categoryId;
    if (description) product.description = description;
    if (minQuantity) product.minQuantity = minQuantity;
    if (name) product.name = name;
    if (quantity) product.quantity = quantity;
    if (valueToBuy) product.valueToBuy = valueToBuy;
    if (valueToSell) product.valueToSell = valueToSell;

    const updatedProduct = await this.productRepository.editProduct(product, id);

    return updatedProduct;
  }
}
