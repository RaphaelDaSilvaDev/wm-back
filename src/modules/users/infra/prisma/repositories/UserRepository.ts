import prismaClient from "../../../../../shared/infra/prisma/prismaClient";
import { ICreateUser } from "../../../interfaces/ICreateUser";
import { IUserRepository } from "../../../repositories/IUserRepository";
import { User } from "../entities/User";

export class UserRepository implements IUserRepository {
  async create({ name, password, permission, username, avatar, id }: ICreateUser): Promise<User> {
    const user = await prismaClient.user.create({
      data: {
        avatar,
        name,
        password,
        permission,
        username,
        id
      }
    });

    return user;
  }

  async findByUserName(username: string): Promise<User | null> {
    return await prismaClient.user.findFirst({ where: { username } });
  }

  async listAll(): Promise<User[]> {
    return await prismaClient.user.findMany();
  }

  async findById(id: string): Promise<User | null> {
    return await prismaClient.user.findUnique({ where: { id } });
  }
}
