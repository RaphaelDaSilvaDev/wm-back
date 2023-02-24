import { inject, injectable } from "tsyringe";
import { IServiceRepository } from "../../repositories/IServiceRepository";

@injectable()
export class GetAllServicesUseCase {
  constructor(
    @inject("ServiceRepository")
    private serviceRepository: IServiceRepository
  ) {}

  async execute() {
    const services = await this.serviceRepository.findAllServices();

    return services;
  }
}
