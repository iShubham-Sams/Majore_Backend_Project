import express from "express";
import {
  destroyPost,
  postApiController,
} from "../../../controllers/api/v1/posts_api";

export const postRoute = express.Router();

postRoute.get("/", postApiController);
postRoute.delete("/:id", destroyPost);
