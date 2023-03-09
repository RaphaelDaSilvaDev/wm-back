import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IUpdateClient } from "../../interfaces/IUpdateClient";
import { IClientRepository } from "../../repositories/IClientRepository";

@injectable()
export class UpdateClientUseCase {
  constructor(
    @inject("ClientRepository")
    private clientRepository: IClientRepository
  ) {}

  async execute(data: IUpdateClient, id: string) {
    const client = await this.clientRepository.findById(id);

    if (!client) {
      throw new AppError("O cliente não foi encontrado!");
    }

    if (!data) {
      throw new AppError("É preciso inserir valores para os campos que quer atualizar!");
    }

    return await this.clientRepository.update(data, id);
  }
}
