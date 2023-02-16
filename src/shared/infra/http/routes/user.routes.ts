import { Router } from "express";
import { AuthenticationUserController } from "../../../../modules/users/useCase/authenticationUser/AuthenticationUserController";
import { CreateUseController } from "../../../../modules/users/useCase/createUser/CreateUserController";
import { ListUsersController } from "../../../../modules/users/useCase/listUsers/ListUsersController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureMasterPermission } from "../middlewares/ensureMasterPermission";

const userRoute = Router();

const createUseController = new CreateUseController();
const listUsersController = new ListUsersController();
const authenticationUserController = new AuthenticationUserController();

userRoute.post("/", ensureAuthenticated, ensureMasterPermission, createUseController.handle);
userRoute.get("/", ensureAuthenticated, ensureMasterPermission, listUsersController.handle);
userRoute.post("/session", authenticationUserController.handle);

export { userRoute };
