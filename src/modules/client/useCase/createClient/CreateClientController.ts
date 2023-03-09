import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateClientUseCase } from "./CreateClientUseCase";

export class CreateClientController {
  async handle(request: Request, response: Response) {
    const {
      name,
      document,
      bornAt,
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

    const createClientUseCase = container.resolve(CreateClientUseCase);

    const client = await createClientUseCase.execute({
      name,
      addressCity,
      addressComplement,
      addressDistrict,
      addressNumber,
      addressState,
      addressStreet,
      bornAt,
      cellphoneNumber,
      cep,
      document,
      email,
      phoneNumber
    });

    return response.json(client);
  }
}
