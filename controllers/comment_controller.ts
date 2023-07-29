import { Response } from "express";
import { Comment } from "../models/comment";
import { Post } from "../models/post";
import { read } from "fs";

export const createCommentOverPostController = async (
  req: any,
  res: Response
) => {
  try {
    const post: any = await Post.findById(req.body.post);
    if (post) {
      const comment = await Comment.create({
        content: req.body.content,
        post: req.body.post,
        user: req.user._id,
      });
      post.comments.push(comment);
      post.save();
      return res.send("Created Comment");
    }
  } catch (error) {
    console.log("Error in creating");
  }
};

export const destroy = async (req: any, res: Response) => {
  try {
    const comment: any = await Comment.findById(req.param.id);
    if (comment && comment.user == req.user.id) {
      let postId = comment.post;
      comment.remove();
      const post = await Post.findByIdAndUpdate(postId, {
        $pull: { comments: req.param.id },
      });
      res.send("delete Successfully");
    }
  } catch (error) {
    console.log("Error in delete");
  }
};
