import { User } from "../models/user";
const passport = require("passport");
let JwtStrategy = require("passport-jwt").Strategy;
let ExtractJwt = require("passport-jwt").ExtractJwt;

var cookieExtractor = function (req: any) {
  var token = null;
  if (req && req.cookies) {
    token = req.cookies["jwt"];
  }
  return token;
};
let opts = {
  jwtFroUsermRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "codeial",
  jwtFromRequest: cookieExtractor,
};

// ...
passport.use(
  new JwtStrategy(opts, (jwt_payload: any, done: any) => {
    User.findOne({ email: jwt_payload.email })
      .then((user) => {
        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      })
      .catch((err) => {
        console.log("Error in finding user from JWT");
      });
  })
);
module.exports = passport;
