import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateServiceUseCase } from "./CreateServiceUseCase";

export class CreateServiceController {
  async handle(request: Request, response: Response) {
    const { id } = request.user;
    const {
      client_observation,
      responsible_observation,
      delivery,
      price,
      status,
      responsible,
      clientId,
      vehicleId
    } = request.body;

    const createServiceUseCase = container.resolve(CreateServiceUseCase);

    const userResponsible = responsible ? responsible : id;

    const service = await createServiceUseCase.execute({
      client_observation,
      responsible_observation,
      delivery,
      price,
      responsible: userResponsible,
      status,
      clientId,
      vehicleId
    });

    return response.json(service);
  }
}
