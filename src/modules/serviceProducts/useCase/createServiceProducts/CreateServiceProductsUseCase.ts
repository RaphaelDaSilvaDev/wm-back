import { inject, injectable } from "tsyringe";
import { ICreateServiceProducts } from "../../interfaces/ICreateServiceProducts";
import { IServiceProductsRepository } from "../../repositories/IServiceProductsRepository";

@injectable()
export class CreateServiceProductsUseCase {
  constructor(
    @inject("ServiceProductsRepository")
    private serviceProductsRepository: IServiceProductsRepository
  ) {}

  async execute(products: ICreateServiceProducts[]) {
    const serviceProducts = products.map(async (item) => {
      await this.serviceProductsRepository.remove(item.serviceId);
      await this.serviceProductsRepository.create(item);
    });

    return serviceProducts;
  }
}
