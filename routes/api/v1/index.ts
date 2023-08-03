import express from "express";
import { postRoute } from "./post";
import { userV1Router } from "./user";

export const versionOneRoute = express.Router();

versionOneRoute.use("/post", postRoute);
versionOneRoute.use("/users", userV1Router);
