import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListUsersUseCase } from "./ListUsersUseCase";

export class ListUsersController {
  async handle(request: Request, response: Response) {
    const listUsersUseCase = container.resolve(ListUsersUseCase);

    const users = await listUsersUseCase.execute();

    return response.json(users);
  }
}
