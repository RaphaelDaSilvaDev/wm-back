import prismaClient from "../../../../../../prisma/prismaClient";
import { ICreateUser } from "../../../interfaces/ICreateUser";
import { IUserRepository } from "../../../repositories/IUserRepository";

export class UserRepository implements IUserRepository {
  async create({ name, password, permission, username, avatar, id }: ICreateUser): Promise<void> {
    await prismaClient.user.create({
      data: {
        avatar,
        name,
        password,
        permission,
        username,
        id
      }
    });
  }
}
