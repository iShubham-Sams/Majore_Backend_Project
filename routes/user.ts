import express from "express";
import { createController } from "../controllers/user_controller";
export const userRouter = express.Router();

userRouter.post("/create", createController);
