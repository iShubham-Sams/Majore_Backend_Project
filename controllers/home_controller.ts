import { Response, Request } from "express";
import { Post } from "../models/post";
import { User } from "../models/user";

export const homeController = (req: Request, res: Response) => {
  // res.cookie("user_id", 25);
  // return res.end("<h1>Express is up for the codial</h1>");

  Post.find({})
    .populate("user")
    .populate({ path: "comments" })
    .exec()
    .then(() => {
      User.find({}).then((allUsers) => {
        return res.send(allUsers);
      });
    })
    .catch((err) => {
      return res.send("Error while finding Post");
    });
};
