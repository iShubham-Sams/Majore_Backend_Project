import express from "express";
import { versionOneRoute } from "./v1";

export const apiRoute = express.Router();

apiRoute.use("/v1", versionOneRoute);
