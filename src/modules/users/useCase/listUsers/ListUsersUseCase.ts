import { inject, injectable } from "tsyringe";
import { IShowUser } from "../../interfaces/iShowUser";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
export class ListUsersUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute(search: string) {
    const users = await this.userRepository.listAll(search);

    const showUsers: IShowUser[] = users.map((user) => {
      return {
        addressCity: user.addressCity,
        addressDistrict: user.addressDistrict,
        addressNumber: user.addressNumber,
        addressState: user.addressState,
        addressStreet: user.addressStreet,
        avatar: user.avatar,
        bornAt: user.bornAt,
        cellphoneNumber: user.cellphoneNumber,
        createdAt: user.createdAt,
        document: user.document,
        email: user.email,
        id: user.id,
        name: user.name,
        permission: user.permission,
        phoneNumber: user.phoneNumber,
        username: user.username,
        status: user.status
      };
    });

    return showUsers;
  }
}
