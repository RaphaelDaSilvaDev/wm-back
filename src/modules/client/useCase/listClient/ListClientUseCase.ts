import { inject, injectable } from "tsyringe";
import { IClientRepository } from "../../repositories/IClientRepository";

@injectable()
export class ListClientUseCase {
  constructor(
    @inject("ClientRepository")
    private clientRepository: IClientRepository
  ) {}

  async execute(search?: string) {
    const clients = await this.clientRepository.listAll(search);

    return clients;
  }
}
