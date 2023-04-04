import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IUpdateUser } from "../../interfaces/IUpdateUser";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
export class UpdateUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute(
    {
      addressCity,
      addressDistrict,
      addressNumber,
      addressState,
      addressStreet,
      avatar,
      cellphoneNumber,
      email,
      phoneNumber,
      password
    }: IUpdateUser,
    id: string
  ) {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new AppError("Usuário não encontrado!");
    }

    /*   if (!username && !password) {
      throw new AppError("You need set a username or a password for update");
    }

    if (username) {
      user.username = username;
    }
*/
    if (password) {
      const passwordEncrypted = await hash(password, 8);

      user.password = passwordEncrypted;
    }

    if (addressCity) user.addressCity = addressCity;
    if (addressDistrict) user.addressDistrict = addressDistrict;
    if (addressNumber) user.addressNumber = addressNumber;
    if (addressState) user.addressState = addressState;
    if (addressStreet) user.addressStreet = addressStreet;
    if (avatar) user.avatar = avatar;
    if (cellphoneNumber) user.cellphoneNumber = cellphoneNumber;
    if (email) user.email = email;
    if (phoneNumber) user.phoneNumber = phoneNumber;

    await this.userRepository.update(user);
  }
}
