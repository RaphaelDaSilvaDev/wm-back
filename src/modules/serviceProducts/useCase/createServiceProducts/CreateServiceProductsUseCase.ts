import { inject, injectable } from "tsyringe";
import { ICreateServiceProducts } from "../../interfaces/ICreateServiceProducts";
import { IServiceProductsRepository } from "../../repositories/IServiceProductsRepository";

@injectable()
export class CreateServiceProductsUseCase {
  constructor(
    @inject("ServiceProductsRepository")
    private serviceProductsRepository: IServiceProductsRepository
  ) {}

  async execute(date: ICreateServiceProducts) {
    const serviceProducts = await this.serviceProductsRepository.create(date);

    return serviceProducts;
  }
}
