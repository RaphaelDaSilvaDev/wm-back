import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IServiceRepository } from "../../repositories/IServiceRepository";

interface IRequest {
  id: string;
  status: string;
}

@injectable()
export class UpdateServiceStatusUseCase {
  constructor(
    @inject("ServiceRepository")
    private serviceRepository: IServiceRepository
  ) {}

  async execute({ id, status }: IRequest) {
    const service = await this.serviceRepository.findServiceById(id);

    if (!service) {
      throw new AppError("Service not exists!");
    }

    service.status = status;

    const updatedService = await this.serviceRepository.editService(service);

    return updatedService;
  }
}
