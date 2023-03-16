import { Request, Response } from "express";
import { container } from "tsyringe";
import { ToggleUserStatusUseCase } from "./ToggleUserStatusUseCase";

export class ToggleUserStatusController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { status } = request.body;

    const toggleUserStatusUseCase = container.resolve(ToggleUserStatusUseCase);

    await toggleUserStatusUseCase.execute(id, status);

    return response.status(201).send();
  }
}
