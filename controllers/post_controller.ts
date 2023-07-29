import { Request, Response } from "express";
import { Post } from "../models/post";
import { Comment } from "../models/comment";

export const post_controller = (req: Request, res: Response) => {
  res.send("<h1>This is post controller</h1>");
};

// export const createPost = (req: any, res: Response) => {
//   User.findById({_id:req.user._id}).then((data)=>{
//     if(data){}
//   })
//   Post.create({
//     content: req.body.contant,
//     user: req.user._id,
//   })
//     .then((data) => {
//       res.send("post created");
//     })
//     .catch((error) => {
//       res.send("error while creating post");
//     });
// };
export const createPost = (req: any, res: Response) => {
  console.log(req.body);

  Post.create({
    content: req.body.content,
    user: req.user._id,
  })
    .then((data) => {
      res.send("post created");
    })
    .catch((error) => {
      res.send("error while creating post");
    });
};

export const destroy = (req: Request, res: Response) => {
  Post.findById(req.body.id).then((post: any) => {
    if (post?.user == req.body.id) {
      post?.remove();
      Comment.deleteMany({ post: req.params.id })
        .then((data) => {
          return res.send("comment delete Successfully");
        })
        .catch((error) => {
          return res.send("Error while deleting comment");
        });
    }
  });
};
