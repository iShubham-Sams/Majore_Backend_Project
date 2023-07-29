// const connectWithMongo = require("./mongo/index");
import express, { Application } from "express";
import { router } from "./routes";
const connectWithMongoose = require("./config/mongoose");
const cookieParser = require("cookie-parser");
// used for session cookie
const passport = require("passport");
const session = require("express-session");
const passportLocal = require("./config/passport-local-strategy");
const MongoStore = require("connect-mongo");
require("dotenv").config();
var multer = require("multer");
var upload = multer();

const uri = process.env.DATABASE_URL ?? "";
const app: Application = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(upload.array());
app.use(express.json());

app.use(express.static("public"));

const port: number = parseInt(process.env.PORT ?? "3000");
// monogo stroe use for store the session cookie in the db
app.use(
  session({
    name: "codial",
    // Todo change secret before  deployment
    secret: "blahsomething",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 100,
    },
    store: MongoStore.create({
      autoRemove: "disabled",
      mongoUrl: uri,
    }),
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use("/", router);
app.listen(port, () => {
  console.log("Yup! My Express Server is running on Port", port);
});
