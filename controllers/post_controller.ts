import { Request, Response } from "express";
import { Post } from "../models/post";
import { Comment } from "../models/comment";

export const post_controller = (req: Request, res: Response) => {
  res.send("<h1>This is post controller</h1>");
};

export const createPost = async (req: any, res: Response) => {
  try {
    const post = await Post.create({
      content: req.body.content,
      user: req.user._id,
    });
    if (post) {
      return res.send("post created");
    }
  } catch (error) {
    console.log("Error while creating post");
  }
};

export const destroy = async (req: Request, res: Response) => {
  try {
    const post: any = await Post.findById(req.body.id);
    if (post) {
      if (post.user == req.body.id) {
        post.remove();
        const comment = await Comment.deleteMany({ post: req.params.id });
        return res.send("Delete Comment Successfully");
      }
    }
  } catch (error) {
    console.log("Error while deletng comment");
  }
};
