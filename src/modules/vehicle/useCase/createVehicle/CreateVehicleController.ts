import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateVehicleUseCase } from "./CreateVehicleUseCase";

export class CreateVehicleController {
  async handle(request: Request, response: Response) {
    const { plate, brand, model, launchYear, fuel, color, clientId } = request.body;

    const createVehicleUseCase = container.resolve(CreateVehicleUseCase);

    const vehicle = await createVehicleUseCase.execute({
      brand,
      clientId,
      color,
      fuel,
      launchYear: new Date(launchYear.split("/")[0]),
      model,
      modelYear: new Date(launchYear.split("/")[1]),
      plate
    });

    return response.json(vehicle);
  }
}
