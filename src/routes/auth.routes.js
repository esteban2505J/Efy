import { Router } from "express";
import {
  register,
  login,
  verifyToken,
  sendOrders,
  // sendEmailBuy,
} from "../controllers/auth.controllers.js";
import { validateSchema } from "../middlewars/validatorSchema.middlewar.js";
import { registerSchema, loginSchema } from "../schemas/auth.schema.js";
import { payStripe } from "../libs/stripe.js";

const router = new Router();
router.post("/register", validateSchema(registerSchema), register);
router.post("/login", validateSchema(loginSchema), login);
// router.post("/sendemailbuy", sendEmailBuy);
router.get("/verify", verifyToken);
router.get("/orders", verifyToken, sendOrders);
router.post("/pay", payStripe);
export default router;
