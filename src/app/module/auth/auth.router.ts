import e from "express";
import { authController } from "./auth.controller";
import validateRequest from "../../middlewere/vallidateRequest";
import { authValidation } from "./auth.validation";

const router = e.Router();

router.post(
    "/register",
    validateRequest(authValidation.registrationValidationSchema),
    authController.registrationUser);

router.post("/login", authController.loginUser);


export const authRouter = router;