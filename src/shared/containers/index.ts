import { container } from "tsyringe";
import { CategoryRepository } from "../../modules/category/infra/prisma/repositories/CategoryRepository";
import { ICategoryRepository } from "../../modules/category/repositories/ICategoryRepository";
import { ClientRepository } from "../../modules/client/infra/prisma/repositories/ClientRepository";
import { IClientRepository } from "../../modules/client/repositories/IClientRepository";
import { ProductRepository } from "../../modules/product/infra/prisma/repositories/ProductRepository";
import { IProductRepository } from "../../modules/product/repositories/IProductRepository";
import { ServiceRepository } from "../../modules/service/infra/prisma/repositories/ServiceRepository";
import { IServiceRepository } from "../../modules/service/repositories/IServiceRepository";
import { ServiceProductsRepository } from "../../modules/serviceProducts/infra/prisma/repositories/ServiceProductsRepository";
import { IServiceProductsRepository } from "../../modules/serviceProducts/repositories/IServiceProductsRepository";
import { UserRepository } from "../../modules/users/infra/prisma/repositories/UserRepository";
import { IUserRepository } from "../../modules/users/repositories/IUserRepository";
import { VehicleRepository } from "../../modules/vehicle/infra/prisma/repositories/VehicleRepository";
import { IVehicleRepository } from "../../modules/vehicle/repositories/IVehicleRepository";

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);
container.registerSingleton<IServiceRepository>("ServiceRepository", ServiceRepository);
container.registerSingleton<IClientRepository>("ClientRepository", ClientRepository);
container.registerSingleton<IVehicleRepository>("VehicleRepository", VehicleRepository);
container.registerSingleton<IProductRepository>("ProductRepository", ProductRepository);
container.registerSingleton<IServiceProductsRepository>(
  "ServiceProductsRepository",
  ServiceProductsRepository
);
container.registerSingleton<ICategoryRepository>("CategoryRepository", CategoryRepository);
