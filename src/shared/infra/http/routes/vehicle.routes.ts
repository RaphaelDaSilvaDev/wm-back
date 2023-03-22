import { Router } from "express";
import { CreateVehicleController } from "../../../../modules/vehicle/useCase/createVehicle/CreateVehicleController";
import { ListVehicleController } from "../../../../modules/vehicle/useCase/listVehicle/ListVehicleController";
import { ListVehicleByClientController } from "../../../../modules/vehicle/useCase/listVehicleByClient/ListVehicleByClientController";
import { ListVehicleByIdController } from "../../../../modules/vehicle/useCase/listVehicleById/ListVehicleByIdController";
import { UpdateVehicleController } from "../../../../modules/vehicle/useCase/updateVehicle/UpdateVehicleController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const createVehicleController = new CreateVehicleController();
const listVehivleController = new ListVehicleController();
const listVehicleFindByClientController = new ListVehicleByClientController();
const listVehicleByIdController = new ListVehicleByIdController();
const updateVehicleController = new UpdateVehicleController();

const vehicleRoute = Router();

vehicleRoute.post("/", ensureAuthenticated, createVehicleController.handle);
vehicleRoute.get("/", ensureAuthenticated, listVehivleController.handle);
vehicleRoute.get("/:id", ensureAuthenticated, listVehicleByIdController.handle);
vehicleRoute.get("/client/:id", ensureAuthenticated, listVehicleFindByClientController.handle);
vehicleRoute.patch("/:id", ensureAuthenticated, updateVehicleController.handle);

export { vehicleRoute };
