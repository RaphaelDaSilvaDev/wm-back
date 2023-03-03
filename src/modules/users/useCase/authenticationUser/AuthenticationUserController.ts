import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthenticationUserUseCase } from "./AuthenticationUserUseCase";

export class AuthenticationUserController {
  async handle(request: Request, response: Response) {
    const { clientCode, username, password } = request.body;

    const authenticationUserUseCase = container.resolve(AuthenticationUserUseCase);

    const userAuthentication = await authenticationUserUseCase.execute({ clientCode, username, password });

    return response.json(userAuthentication);
  }
}
