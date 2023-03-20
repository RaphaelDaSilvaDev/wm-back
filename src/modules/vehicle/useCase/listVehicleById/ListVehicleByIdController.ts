import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListVehicleByIdUseCase } from "./ListVehicleByIdUseCase";

export class ListVehicleByIdController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const listVehicleByIdUseCase = container.resolve(ListVehicleByIdUseCase);
    const vehicle = await listVehicleByIdUseCase.execute(id);

    return response.json(vehicle);
  }
}
