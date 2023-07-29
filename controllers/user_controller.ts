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

export const logoutSession = (req: any, res: Response) => {
  req.logOut();
  return res.send("logout done");
};

export const updteUserProfile = (req: any, res: Response) => {
  if (req.user.id === req.params.id) {
    User.findByIdAndUpdate(req.params.id, req.body)
      .then((data) => {
        return res.send("Updated Successfully");
      })
      .catch((err) => {
        return res.status(401).send("Unauthorized");
      });
  } else {
    return res.send("id not match");
  }
};
