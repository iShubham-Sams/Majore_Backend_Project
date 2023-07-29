import express from "express";
import {
  createCommentOverPostController,
  destroy,
} from "../controllers/comment_controller";
const passport = require("../config/passport-local-strategy");
export const commentRoute = express.Router();

commentRoute.post(
  "/create",
  passport.checkAuthentication,
  createCommentOverPostController
);
commentRoute.delete("/destroy/:id", passport.checkAuthentication, destroy);
