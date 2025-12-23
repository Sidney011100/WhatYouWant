import { Router } from "express";
import { createOrderController } from "../controllers/orderController";

const router = Router();

router.post("/order", createOrderController);

export default router;