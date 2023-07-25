import express from "express";
import {
  createController,
  createSession,
  getUserProfileController,
} from "../controllers/user_controller";
export const userRouter = express.Router();

userRouter.get("/profile", getUserProfileController);
userRouter.post("/create", createController);
userRouter.post("/create-session", createSession);
