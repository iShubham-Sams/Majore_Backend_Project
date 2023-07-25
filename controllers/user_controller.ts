import { Response, Request } from "express";
import { User } from "../models/user";

// for sign up user and store in data base
export const createController = (req: Request, res: Response) => {
  if (req.body.password !== req.body.confirm_password) {
    return res.redirect("back");
  }
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        User.create(req.body)
          .then(() => {
            return res.redirect("/user/sign-in");
          })
          .catch((error) => {
            console.log("error in finding user in sign up");
            return res.redirect("back");
          });
      } else {
        return res.redirect("");
      }
    })
    .catch((err) => {
      console.log("error in finding user in sign up");
      return;
    });
};
//
// for sign in and create session
export const createSession = (req: Request, res: Response) => {
  // seteps to authenticate
  // find the user
  User.findOne({ email: req.body.email })
    .then((user) => {
      // handle user  found
      if (user) {
        // handle password don't match
        if (user.password != req.body.password) {
          return res.send("Password Inccorect");
        }
        // handle session creation
        res.cookie("user_id", user.id);
        return res.send("user Sign in");
      } else {
        // handle user not found
        return res.send("User not found");
      }
    })
    .catch(() => {
      console.log("error in finding user in sign in");
      return;
    });
};
