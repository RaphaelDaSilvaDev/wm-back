import { Request, Response } from "express";
import { container } from "tsyringe";
import { EditServiceUseCase } from "./EditServiceUseCase";

export class EditServiceController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const {
      delivery,
      responsible_observation,
      price,
      discountValue,
      discountPercentage,
      responsible,
      status
    } = request.body;

    const editServiceUseCase = container.resolve(EditServiceUseCase);

    const service = await editServiceUseCase.execute({
      delivery,
      id,
      responsible_observation,
      price,
      discountValue,
      discountPercentage,
      responsible,
      status
    });

    return response.json(service);
  }
}
