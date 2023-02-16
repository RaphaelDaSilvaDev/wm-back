import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IEditService } from "../../interfaces/IEditService";
import { IServiceRepository } from "../../repositories/IServiceRepository";

@injectable()
export class EditServiceUseCase {
  constructor(
    @inject("ServiceRepository")
    private serviceRepository: IServiceRepository
  ) {}

  async execute({ delivery, observation, price, responsible, id }: IEditService) {
    const service = await this.serviceRepository.findServiceById(id);

    if (!service) {
      throw new AppError("Service not exists!");
    }

    if (delivery) service.delivery = delivery;
    if (observation) service.observation = observation;
    if (price) service.price = price;
    if (responsible) service.responsible = responsible;

    const updateService = await this.serviceRepository.editService(service);

    return updateService;
  }
}
