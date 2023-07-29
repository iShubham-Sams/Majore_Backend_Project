import { Response } from "express";
import { Comment } from "../models/comment";
import { Post } from "../models/post";

export const createCommentOverPostController = (req: any, res: Response) => {
  Post.findById(req.body.post)
    .then((post) => {
      if (post) {
        Comment.create({
          content: req.body.content,
          post: req.body.post,
          user: req.user._id,
        })
          .then((data: any) => {
            post.comments.push(data);
            post.save();
            res.send("Created Comment");
          })
          .catch((err) => {
            console.log("Error while creating comment");
          });
      }
    })
    .catch((err) => {
      console.log("Error while finding post");
    });
};

export const destroy = (req: any, res: Response) => {
  Comment.findById(req.params.id).then((comment: any) => {
    if (comment?.user == req.user.id) {
      let postId = comment.post;
      comment.remove();
      Post.findByIdAndUpdate(postId, { $pull: { comments: req.param.id } })
        .then((data) => {
          res.send("delete Successfully");
        })
        .catch((err) => res.send("There is error"));
    }
  });
};
