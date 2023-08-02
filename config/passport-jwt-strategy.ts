import { User } from "../models/user";

const passport = require("passport");
const JWTStrategy = require("passport-jwt").strategy;
const ExtractJWT = require("passport-jwt").ExtractJWT;

let opts = {
  jwtFroUsermRequest: ExtractJWT.fromAuthHeaderAsBearerToken,
  secretOrKey: "codeial",
};
passport.use(
  new JWTStrategy(opts, function (jwtPayload: any, done: any) {
    User.findById(jwtPayload._id)
      .then((user) => {
        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      })
      .catch(() => {
        console.log("Error in finding user from JWT");
      });
  })
);

module.exports = passport;
