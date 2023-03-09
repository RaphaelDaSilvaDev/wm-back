import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateClientUseCase } from "./UpdateClientUseCase";

export class UpdateClientController {
  async handle(request: Request, response: Response) {
    const {
      phoneNumber,
      cellphoneNumber,
      email,
      cep,
      addressState,
      addressCity,
      addressDistrict,
      addressStreet,
      addressNumber,
      addressComplement
    } = request.body;

    const { id } = request.params;

    const updateClientUseCase = container.resolve(UpdateClientUseCase);

    const client = await updateClientUseCase.execute(
      {
        addressCity,
        addressComplement,
        addressDistrict,
        addressNumber,
        addressState,
        addressStreet,
        cellphoneNumber,
        cep,
        email,
        phoneNumber
      },
      id
    );

    return response.json(client);
  }
}
