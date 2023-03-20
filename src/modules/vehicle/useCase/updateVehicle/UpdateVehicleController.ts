import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateVehicleUseCase } from "./UpdateVehicleUseCase";

export class UpdateVehicleController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { client_id } = request.body;

    const updateVehicleUseCase = container.resolve(UpdateVehicleUseCase);
    const vehicle = await updateVehicleUseCase.execute(client_id, id);

    return response.json(vehicle);
  }
}
