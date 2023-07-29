import { Response, Request } from "express";
import { Post } from "../models/post";

export const homeController = (req: Request, res: Response) => {
  // res.cookie("user_id", 25);
  // return res.end("<h1>Express is up for the codial</h1>");

  Post.find({})
    .populate("user")
    .exec()
    .then((data) => {
      return res.send(data);
    })
    .catch((err) => {
      return res.send("Error while finding Post");
    });
};
