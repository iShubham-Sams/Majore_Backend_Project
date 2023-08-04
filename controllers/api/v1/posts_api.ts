import { Request, Response } from "express";
import { Post } from "../../../models/post";
import { Comment } from "../../../models/comment";

export const postApiController = async (req: any, res: any) => {
  let posts = await Post.find({})
    .populate("user")
    .populate({
      path: "comments",
      populate: {
        path: "user",
      },
    });
  return res.json(200, {
    message: "list of post",
    post: posts,
  });
};

export const destroyPost = async (req: any, res: Response) => {
  try {
    let post = await Post.findById(req.params.id);
    if (post?.user?._id == req.user.id) {
      if (post) {
        post.deleteOne();
        await Comment.deleteMany({ post: req.params.id });
        return res.status(200).json({
          message: "Post and associated comments deleted successfully!",
        });
      } else {
        res.status(401).json({
          message: "You cannot delete this post",
        });
      }
    }
  } catch (err) {
    console.log(err, "err");

    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
