import express from "express";
import { homeController } from "../controllers/home_controller";
import { userRouter } from "./user";
import { postRoute } from "./post";
import { commentRoute } from "./comment";
import { apiRoute } from "./api";

export const router = express.Router();

router.get("/", homeController);
router.use("/users", userRouter);
router.use("/post", postRoute);
router.use("/comment", commentRoute);

router.use("/api", apiRoute);
