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
    post: [],
  });
};

export const destroyPost = async (req: Request, res: Response) => {
  try {
    let post: any = await Post.findById(req.params.id);

    // if (post.user == req.user.id){
    if (post) {
      post.remove();

      await Comment.deleteMany({ post: req.params.id });

      return res.status(200).json({
        message: "Post and associated comments deleted successfully!",
      });
      // }else{
      //     req.flash('error', 'You cannot delete this post!');
      //     return res.redirect('back');
      // }
    }
  } catch (err) {
    console.log("********", err);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
