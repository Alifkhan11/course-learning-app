import e from "express";
import { authController } from "./auth.controller";

const router = e.Router();

router.post("/register", authController.registrationUser);

router.post("/login", authController.loginUser);


export const authRouter = router;