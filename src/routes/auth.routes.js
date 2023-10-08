import { Router } from "express";
import { register } from "../controllers/auth.controllers.js";
import { validateSchema } from "../middlewars/validatorSchema.middlewar.js";
import { registerSchema } from "../schemas/auth.schema.js";

const router = new Router();
router.post("/register", validateSchema(registerSchema), register);

export default router;
