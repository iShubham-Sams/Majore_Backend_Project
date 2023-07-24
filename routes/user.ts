import express from "express";
import { userController } from "../controllers/user_controller";
const router = express.Router();

export const userRouter = router.get("/profile", userController);
