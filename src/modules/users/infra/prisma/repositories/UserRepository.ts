import { prismaClient } from "../../../../../shared/infra/http/server";
import { ICreateUser } from "../../../interfaces/ICreateUser";
import { IUserRepository } from "../../../repositories/IUserRepository";
import { User } from "../entities/User";

export class UserRepository implements IUserRepository {
  async create({
    password,
    permission,
    username,
    avatar,
    id,
    status,
    addressCity,
    addressDistrict,
    addressNumber,
    addressState,
    addressStreet,
    cellphoneNumber,
    phoneNumber,
    email,
    bornAt,
    document,
    name
  }: ICreateUser): Promise<User> {
    const user = await prismaClient.user.create({
      data: {
        password,
        permission,
        username,
        avatar,
        id,
        status,
        addressCity,
        addressDistrict,
        addressNumber,
        addressState,
        addressStreet,
        cellphoneNumber,
        phoneNumber,
        email,
        name,
        bornAt,
        document
      }
    });

    return user;
  }

  async update({
    password,
    permission,
    username,
    avatar,
    id,
    status,
    addressCity,
    addressDistrict,
    addressNumber,
    addressState,
    addressStreet,
    cellphoneNumber,
    phoneNumber,
    email
  }: ICreateUser): Promise<User> {
    const user = await prismaClient.user.update({
      where: { id },
      data: {
        avatar,
        password,
        permission,
        status,
        username,
        addressCity,
        addressDistrict,
        addressNumber,
        addressState,
        addressStreet,
        cellphoneNumber,
        phoneNumber,
        email
      }
    });
    return user;
  }

  async findByUserName(username: string): Promise<User | null> {
    return await prismaClient.user.findFirst({ where: { username } });
  }

  async listAll(search?: string): Promise<User[]> {
    const users = await prismaClient.user.findMany({
      orderBy: { permission: "asc" },
      where: {
        OR: [
          { name: { contains: search ? search : "", mode: "insensitive" } },
          { username: { contains: search ? search : "", mode: "insensitive" } },
          { cellphoneNumber: { contains: search ? search : "", mode: "insensitive" } },
          { email: { contains: search ? search : "", mode: "insensitive" } }
        ]
      }
    });

    return users;
  }

  async findById(id: string): Promise<User | null> {
    return await prismaClient.user.findUnique({ where: { id } });
  }
}
