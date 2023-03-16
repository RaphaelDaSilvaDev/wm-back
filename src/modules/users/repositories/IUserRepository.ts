import { User } from "../infra/prisma/entities/User";
import { ICreateUser } from "../interfaces/ICreateUser";
import { IUpdateUser } from "../interfaces/IUpdateUser";

export interface IUserRepository {
  create(user: ICreateUser): Promise<User>;
  update(user: IUpdateUser): Promise<User>;
  findByUserName(username: string): Promise<User | null>;
  listAll(search?: string): Promise<User[]>;
  findById(id: string): Promise<User | null>;
}
