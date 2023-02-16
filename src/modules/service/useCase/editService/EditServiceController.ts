import { Request, Response } from "express";
import { container } from "tsyringe";
import { EditServiceUseCase } from "./EditServiceUseCase";

export class EditServiceController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { delivery, observation, price, responsible } = request.body;

    const editServiceUseCase = container.resolve(EditServiceUseCase);

    const service = await editServiceUseCase.execute({ delivery, id, observation, price, responsible });

    return response.json(service);
  }
}
