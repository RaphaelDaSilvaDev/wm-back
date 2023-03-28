import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IUserRepository } from "../../repositories/IUserRepository";

interface IRequest {
  clientCode: string;
  username: string;
  password: string;
}

interface IResponse {
  clientCode: string;
  user: {
    name?: string;
    username?: string;
    avatar?: string | null;
    permission?: string;
    id?: string;
  };
  token: string;
}

@injectable()
export class AuthenticationUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute({ clientCode, username, password }: IRequest): Promise<IResponse> {
    const user = await this.userRepository.findByUserName(username);

    if (!user) {
      throw new AppError("Username or Password incorrect!");
    }

    if (user.status !== "access") {
      throw new AppError("Username or Password incorrect!");
    }

    const passwordMatch = await compare(password, user.password ? user.password : "");

    if (!passwordMatch) {
      throw new AppError("Username or Password incorrect!");
    }

    const token = sign({}, "16686a71512100d3399b26af46f87a8f", {
      subject: user.id,
      expiresIn: "1d"
    });

    const tokenReturn: IResponse = {
      token,
      clientCode,
      user: {
        name: user.name,
        username: user.username,
        permission: user.permission,
        avatar: user.avatar,
        id: user?.id ? user.id : ""
      }
    };

    return tokenReturn;
  }
}
