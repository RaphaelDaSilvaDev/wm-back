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

  async execute({ delivery, responsible_observation, price, responsible, id, status }: IEditService) {
    if (id) {
      const service = await this.serviceRepository.findServiceById(id);

      if (!service) {
        throw new AppError("Service not exists!");
      }

      if (delivery) service.delivery = delivery;
      if (responsible_observation) service.responsible_observation = responsible_observation;
      if (price) service.price = price;
      if (responsible) service.responsible = responsible;
      if (status) service.status = status;

      const updateService = await this.serviceRepository.editService(service);

      return updateService;
    } else {
      throw new AppError("Serviço não encontrado!");
    }
  }
}
