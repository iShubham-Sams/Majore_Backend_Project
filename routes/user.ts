import express from "express";
import {
  createController,
  createSession,
} from "../controllers/user_controller";
export const userRouter = express.Router();

userRouter.post("/create", createController);
userRouter.post("/create-session", createSession);
