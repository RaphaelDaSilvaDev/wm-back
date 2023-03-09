import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ICreateClient } from "../../interfaces/ICreateClient";
import { IClientRepository } from "../../repositories/IClientRepository";

@injectable()
export class CreateClientUseCase {
  constructor(
    @inject("ClientRepository")
    private clientRepository: IClientRepository
  ) {}

  async execute(data: ICreateClient) {
    const findClient = await this.clientRepository.findByDocument(data.document);

    if (findClient) {
      throw new AppError("Esse cliente já está cadastrado!");
    }

    const client = await this.clientRepository.create(data);

    return client;
  }
}
