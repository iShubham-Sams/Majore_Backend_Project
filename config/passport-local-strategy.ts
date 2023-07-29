import { NextFunction, Response } from "express";
import { User } from "../models/user";
const passport = require("passport");

const LocalStrategy = require("passport-local").Strategy;

// authentication using passport
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
    },
    function (email: string, password: string, done: any) {
      // find a user and establish the identity
      User.findOne({ email: email })
        .then((user) => {
          console.log(user, "user");

          if (!user || user.password != password) {
            console.log("Invalid Username/Password");
            return done(null, false);
          }

          return done(null, user);
        })
        .catch((error) => {
          if (error) {
            console.log("Error in finding user --> passport");
            return done(error);
          }
        });
    }
  )
);

// , function (err: any, user: any) {
//   if (err) {
//     console.log("Error in finding user --> passport");
//     return done(err);
//   }

// }

// serializing the user to decide which key is to be kept in the cookies
passport.serializeUser(function (user: any, done: any) {
  done(null, user.id);
});

// deserializing the user from the key in the cookies
passport.deserializeUser(function (id: any, done: any) {
  User.findById(id)
    .then((user) => {
      return done(null, user);
    })
    .catch((err) => {
      if (err) {
        console.log("Error in finding user --> passport");
        return done(err);
      }
    });
});
// check is user authenticated passport.checkAuthentication
passport.checkAuthentication = (
  req: any,
  res: Response,
  next: NextFunction
) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    return res.send("Unauthorize");
  }
};
passport.setAuthenticatedUser = (
  req: any,
  res: Response,
  next: NextFunction
) => {
  if (req.isAuthenticated()) {
    res.locals.user = req.user;
  }
  next();
};

module.exports = passport;
