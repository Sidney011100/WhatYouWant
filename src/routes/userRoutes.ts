// src/routes/userRoutes.ts
import { Router } from "express";
import { firebaseAuth } from "../middleware/firebaseAuth";
import { createUserController,getUserById,createUser } from "../controllers/userController";

const router = Router();

router.post("/", firebaseAuth, createUser);
router.post("/users/me", firebaseAuth, createUserController);
router.get("/:id", getUserById);

export default router;

