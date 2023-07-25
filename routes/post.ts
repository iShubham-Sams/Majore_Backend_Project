import express from "express";
import { post_controller } from "../controllers/post_controller";
export const postRoute = express.Router();

postRoute.get("/:postId", post_controller);
