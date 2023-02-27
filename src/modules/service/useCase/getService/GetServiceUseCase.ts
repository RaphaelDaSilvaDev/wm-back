import { inject, injectable } from "tsyringe";
import { IServiceRepository } from "../../repositories/IServiceRepository";

@injectable()
export class GetServiceUseCase {
  constructor(
    @inject("ServiceRepository")
    private serviceRepository: IServiceRepository
  ) {}

  async execute(id: string) {
    const service = await this.serviceRepository.findServiceById(id);

    return service;
  }
}
