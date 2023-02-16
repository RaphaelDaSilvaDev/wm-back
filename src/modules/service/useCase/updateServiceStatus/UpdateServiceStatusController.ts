import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateServiceStatusUseCase } from "./UpdateServiceStatusUseCase";

export class UpdateServiceStatusController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { status } = request.body;

    const updateServiceStatusUseCase = container.resolve(UpdateServiceStatusUseCase);

    const service = await updateServiceStatusUseCase.execute({ id, status });

    return response.json(service);
  }
}
