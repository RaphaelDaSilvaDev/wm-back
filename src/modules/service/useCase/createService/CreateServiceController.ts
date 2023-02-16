import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateServiceUseCase } from "./CreateServiceUseCase";

export class CreateServiceController {
  async handle(request: Request, response: Response) {
    const { id } = request.user;
    const {
      client_name,
      client_phone,
      delivery,
      observation,
      price,
      responsible,
      status,
      vehicle_model,
      vehicle_plate
    } = request.body;

    const createServiceUseCase = container.resolve(CreateServiceUseCase);

    const userResponsible = responsible ? responsible : id;

    const service = await createServiceUseCase.execute({
      client_name,
      client_phone,
      delivery,
      observation,
      price,
      responsible: userResponsible,
      status,
      vehicle_model,
      vehicle_plate
    });

    return response.json(service);
  }
}
