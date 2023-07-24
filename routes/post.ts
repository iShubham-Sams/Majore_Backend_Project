import express from "express";
import { post_controller } from "../controllers/post_controller";
const router = express.Router();
export const postRoute = router.get("/post", post_controller);
