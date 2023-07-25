// const connectWithMongo = require("./mongo/index");
import express, { Application } from "express";
import { router } from "./routes";
const cookieParser = require("cookie-parser");
const connectWithMongoose = require("./config/mongoose");
require("dotenv").config();

const app: Application = express();

app.use(express.urlencoded());
app.use(cookieParser());

const port: number = parseInt(process.env.PORT ?? "3000");

app.use("/", router);

app.listen(port, () => {
  console.log("Yup! My Express Server is running on Port", port);
});
