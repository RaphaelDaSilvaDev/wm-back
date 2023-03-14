import { NextFunction, Request, Response, Router } from "express";
import { categoryRoute } from "./category.routes";
import { clientRoute } from "./client.routes";
import { productRoute } from "./product.routes";
import { serviceRoute } from "./service.routes";
import { serviceProducts } from "./serviceProduct.routes";
import { userRoute } from "./user.routes";
import { vehicleRoute } from "./vehicle.routes";

const router = Router();

router.use("/user", userRoute);
router.use("/service", serviceRoute);
router.use("/client", clientRoute);
router.use("/vehicle", vehicleRoute);
router.use("/product", productRoute);
router.use("/category", categoryRoute);
router.use("/service-product", serviceProducts);

export { router };
