import express from "express";
import {
  createController,
  createSession,
  logoutSession,
  updteUserProfile,
} from "../controllers/user_controller";
const passport = require("passport");
export const userRouter = express.Router();

userRouter.post("/create", createController);
userRouter.post("/update/:id", updteUserProfile);
// use passport as a middleware to authenticate
userRouter.post(
  "/create-session",
  passport.authenticate("local", { failureMessage: true }),
  createSession
);

userRouter.post("/logout", logoutSession);
