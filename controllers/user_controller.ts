import { Response, Request } from "express";
import { User } from "../models/user";

// for sign up
export const createController = async (req: Request, res: Response) => {
  try {
    if (req.body.password !== req.body.confirm_password) {
      throw new Error("Password didn't Match");
    }
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      const createUser = await User.create(req.body);
      if (createUser) {
        return res.send("User Create Successfully");
      }
    } else {
      return res.send("User Already exist");
    }
  } catch (error) {
    console.log("Error while creating user");
  }
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
