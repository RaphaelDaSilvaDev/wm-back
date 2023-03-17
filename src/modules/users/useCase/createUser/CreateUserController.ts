import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUseController {
  async handle(request: Request, response: Response) {
    const {
      name,
      username,
      document,
      bornAt,
      phoneNumber,
      cellphoneNumber,
      email,
      addressState,
      addressCity,
      addressDistrict,
      addressStreet,
      addressNumber,
      permission,
      avatar,
      password,
      status
    } = request.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);

    const user = await createUserUseCase.execute({
      name,
      username,
      document,
      bornAt: new Date(bornAt),
      phoneNumber,
      cellphoneNumber,
      email,
      addressState,
      addressCity,
      addressDistrict,
      addressStreet,
      addressNumber,
      permission: permission ? permission : "user",
      avatar,
      password: password ? password : "user",
      status: status ? status : "inactive"
    });

    return response.json(user);
  }
}
