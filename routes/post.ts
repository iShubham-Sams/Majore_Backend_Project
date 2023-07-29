import express from "express";
import {
  createPost,
  destroy,
  post_controller,
} from "../controllers/post_controller";
const passport = require("../config/passport-local-strategy");
export const postRoute = express.Router();

postRoute.get("/", passport.checkAuthentication, post_controller);

postRoute.post("/create", passport.checkAuthentication, createPost);
postRoute.delete("/destroy/:id", passport.checkAuthentication, destroy);
