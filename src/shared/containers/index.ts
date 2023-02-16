import { container } from "tsyringe";
import { UserRepository } from "../../modules/users/infra/prisma/repositories/UserRepository";
import { IUserRepository } from "../../modules/users/repositories/IUserRepository";

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);
