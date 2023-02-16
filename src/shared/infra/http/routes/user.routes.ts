import { Router } from "express";
import { AuthenticationUserController } from "../../../../modules/users/useCase/authenticationUser/AuthenticationUserController";
import { CreateUseController } from "../../../../modules/users/useCase/createUser/CreateUserController";
import { ListUsersController } from "../../../../modules/users/useCase/listUsers/ListUsersController";
import { ToggleUserStatusController } from "../../../../modules/users/useCase/toggleUserStatus/ToggleUserStatusController";
import { UpdateUserController } from "../../../../modules/users/useCase/updateUser/UpdateUserController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureMasterPermission } from "../middlewares/ensureMasterPermission";

const userRoute = Router();

const createUseController = new CreateUseController();
const listUsersController = new ListUsersController();
const updateUserController = new UpdateUserController();
const toggleUserStatusController = new ToggleUserStatusController();
const authenticationUserController = new AuthenticationUserController();

userRoute.post("/session", authenticationUserController.handle);
userRoute.post("/update", ensureAuthenticated, updateUserController.handle);
userRoute.get("/", ensureAuthenticated, ensureMasterPermission, listUsersController.handle);
userRoute.post("/", ensureAuthenticated, ensureMasterPermission, createUseController.handle);
userRoute.patch(
  "/status/:id",
  ensureAuthenticated,
  ensureMasterPermission,
  toggleUserStatusController.handle
);

export { userRoute };
