import { Response, Request } from "express";
import { Post } from "../models/post";
import { User } from "../models/user";

export const homeController = async (req: Request, res: Response) => {
  try {
    let posts = await Post.find({})
      .populate("user")
      .populate({
        path: "comments",
        populate: {
          path: "user",
        },
      })
      .exec();
    let user = await User.find({});

    return res.send(user);
  } catch (error) {
    console.log(error, "errr");
    return;
  }
};
