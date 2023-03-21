import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

export class UpdateUserController {
  async handle(request: Request, response: Response) {
    const { userId } = request.params;
    const {
      addressCity,
      addressDistrict,
      addressNumber,
      addressState,
      addressStreet,
      avatar,
      cellphoneNumber,
      email,
      phoneNumber
    } = request.body;

    const updateUserUseCase = container.resolve(UpdateUserUseCase);

    await updateUserUseCase.execute(
      {
        addressCity,
        addressDistrict,
        addressNumber,
        addressState,
        addressStreet,
        avatar,
        cellphoneNumber,
        email,
        phoneNumber
      },
      userId
    );

    return response.status(201).send();
  }
}
