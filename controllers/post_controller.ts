import { Request, Response } from "express";
import { Post } from "../models/post";

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
