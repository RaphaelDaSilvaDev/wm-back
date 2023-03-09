import { inject, injectable } from "tsyringe";
import { IServiceProductsRepository } from "../../repositories/IServiceProductsRepository";

@injectable()
export class ListServiceProductsUseCase {
  constructor(
    @inject("ServiceProductsRepository")
    private serviceProductsRepository: IServiceProductsRepository
  ) {}

  async execute(serviceId: string) {
    const serviceProduct = await this.serviceProductsRepository.findByService(serviceId);
    return serviceProduct;
  }
}
