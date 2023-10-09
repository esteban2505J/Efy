import { Router } from "express";
import {
  register,
  login,
  verifyToken,
} from "../controllers/auth.controllers.js";
import { validateSchema } from "../middlewars/validatorSchema.middlewar.js";
import { registerSchema, loginSchema } from "../schemas/auth.schema.js";

const router = new Router();
router.post("/register", validateSchema(registerSchema), register);
router.post("/login", validateSchema(loginSchema), login);
router.get("/verify", verifyToken);

export default router;
