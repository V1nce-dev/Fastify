import { Router } from "express";
import UserController from "../controllers/userController";

const router = Router();

router.post("/register", UserController.register);
router.post("/authenticate", UserController.authenticate);

export default router;
