import { Response, Request } from "express";
import { User } from "../models/user";

// for sign up
export const createController = (req: Request, res: Response) => {
  if (req.body.password !== req.body.confirm_password) {
    return res.redirect("back");
  }
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        User.create(req.body)
          .then(() => {
            return res.send("/user/sign-in");
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
export const createSession = (req: Request, res: Response) => {
  res.send("Session Created");
};
// for sign in
