import express from "express";
import {
  destroyPost,
  postApiController,
} from "../../../controllers/api/v1/posts_api";
const postApi = require("../../../controllers/api/v1/posts_api");
const passport = require("passport");

export const postRoute = express.Router();
postRoute.get("/", postApiController);
postRoute.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  destroyPost
);
