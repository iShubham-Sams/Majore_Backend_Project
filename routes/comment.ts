import express from "express";
import { createCommentOverPostController } from "../controllers/comment_controller";
const passport = require("../config/passport-local-strategy");
export const commentRoute = express.Router();

commentRoute.post(
  "/create",
  passport.checkAuthentication,
  createCommentOverPostController
);
