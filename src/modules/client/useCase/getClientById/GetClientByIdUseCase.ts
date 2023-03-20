import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IClientRepository } from "../../repositories/IClientRepository";

@injectable()
export class GetClientByIdUseCase {
  constructor(
    @inject("ClientRepository")
    private clientRepository: IClientRepository
  ) {}

  async execute(id: string) {
    const client = await this.clientRepository.findById(id);

    if (!client) {
      throw new AppError("Cliente não encontrado!");
    }

    return client;
  }
}
