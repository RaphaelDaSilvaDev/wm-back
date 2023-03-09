import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateVehicleUseCase } from "./CreateVehicleUseCase";

export class CreateVehicleController {
  async handle(request: Request, response: Response) {
    const { plate, brand, model, launchYear, modelYear, fuel, color, client } = request.body;

    const createVehicleUseCase = container.resolve(CreateVehicleUseCase);

    const vehicle = await createVehicleUseCase.execute({
      brand,
      client,
      color,
      fuel,
      launchYear,
      model,
      modelYear,
      plate
    });

    return response.json(vehicle);
  }
}
