import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ICreateUser } from "../../interfaces/ICreateUser";
import { IUserRepository } from "../../repositories/IUserRepository";

interface IResponse {
  id?: string;
  name?: string;
  username?: string;
  permission?: string;
  avatar?: string;
}

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute({
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
  }: ICreateUser) {
    const findUserName = await this.userRepository.findByUserName(username ? username : "");

    if (findUserName) {
      throw new AppError("This username already exists!");
    }

    if (!password) {
      throw new AppError("Digite uma senha");
    }

    const passwordHash = await hash(password, 8);

    const user = await this.userRepository.create({
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
      password: passwordHash,
      status
    });

    const showUser: IResponse = {
      id: user.id,
      name: user.name,
      username: user.username,
      avatar: user.avatar ? user.avatar : undefined,
      permission: user.permission
    };

    return showUser;
  }
}
