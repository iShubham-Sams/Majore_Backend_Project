import express from "express";
import { post_controller } from "../controllers/post_controller";
const passport = require("../config/passport-local-strategy");
export const postRoute = express.Router();

postRoute.get("/", passport.checkAuthentication, post_controller);
