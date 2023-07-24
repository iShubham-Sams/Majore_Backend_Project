import express from "express";
import { homeController } from "../controllers/home_controller";
import { userRouter } from "./user";
import { postRoute } from "./post";

export const router = express.Router();

router.get("/", homeController);
router.use("/users", userRouter);
router.use("/post", postRoute);
