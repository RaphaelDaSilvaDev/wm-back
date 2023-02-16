import { ICreateUser } from "../interfaces/ICreateUser";

export interface IUserRepository {
  create(user: ICreateUser): Promise<void>;
}
