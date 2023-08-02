import express from "express";
import { postRoute } from "./post";

export const versionOneRoute = express.Router();

versionOneRoute.use("/post", postRoute);
