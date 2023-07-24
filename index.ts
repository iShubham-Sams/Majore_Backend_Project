// const connectWithMongo = require("./mongo/index");
import express, { Application } from "express";
import { router } from "./routes";
const connectWithMongoose = require("./config/mongoose/index");
require("dotenv").config();
const app: Application = express();
const port: number = parseInt(process.env.PORT ?? "3000");

app.use("/", router);

app.listen(port, () => {
  console.log("Yup! My Express Server is running on Port", port);
});
