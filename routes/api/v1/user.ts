import express from "express";
import { createV1Session } from "../../../controllers/api/v1/users_api";
const passport = require("passport");
export const userV1Router = express.Router();

userV1Router.post("/create-session", createV1Session);
