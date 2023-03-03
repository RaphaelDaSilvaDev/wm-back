import { NextFunction, Request, Response, Router } from "express";
import { serviceRoute } from "./service.routes";
import { userRoute } from "./user.routes";

const router = Router();

router.use("/user", userRoute);
router.use("/service", serviceRoute);

export { router };
