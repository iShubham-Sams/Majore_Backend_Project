import express from "express";
import { homeController } from "../controllers/home_controller";

export const router = express.Router();

router.get("/", homeController);
