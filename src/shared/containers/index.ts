import { container } from "tsyringe";
import { ServiceRepository } from "../../modules/service/infra/prisma/repositories/ServiceRepository";
import { IServiceRepository } from "../../modules/service/repositories/IServiceRepository";
import { UserRepository } from "../../modules/users/infra/prisma/repositories/UserRepository";
import { IUserRepository } from "../../modules/users/repositories/IUserRepository";

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);
container.registerSingleton<IServiceRepository>("ServiceRepository", ServiceRepository);
