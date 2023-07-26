import { User } from "../models/user";

const passport = require("passport");

const LocalStrategy = require("passport-local").Strategy;

// authentication using passport
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
    },
    function (email: any, password: any, done: any) {
      console.log(email);

      // find a user and establish the identity
      User.findOne({ email: email })
        .then((user) => {
          console.log(user);

          if (!user || user.password != password) {
            console.log("Invalid Username/Password");
            return done(null, false);
          }

          return done(null, user);
        })
        .catch((error) => {
          if (error) {
            console.log("Error in finding user --> Passport");
            return done(error);
          }
        });
    }
  )
);

// , function (err: any, user: any) {
//   if (err) {
//     console.log("Error in finding user --> Passport");
//     return done(err);
//   }

// }

// serializing the user to decide which key is to be kept in the cookies
passport.serializeUser(function (user: any, done: any) {
  done(null, user.id);
});

// deserializing the user from the key in the cookies
passport.deserializeUser(function (id: any, done: any) {
  User.findById(id, function (err: any, user: any) {
    if (err) {
      console.log("Error in finding user --> Passport");
      return done(err);
    }

    return done(null, user);
  });
});

module.exports = passport;
