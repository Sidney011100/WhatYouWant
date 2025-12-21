// src/routes/userRoutes.ts
import { Router } from "express";
import { firebaseAuth } from "../middleware/firebaseAuth";
import { createUserController,getUserById } from "../controllers/userController";

const router = Router();

router.post("/users/me", firebaseAuth, createUserController);
router.get("/:id", getUserById);

export default router;

