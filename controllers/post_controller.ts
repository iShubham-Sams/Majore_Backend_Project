import { Request, Response } from "express";
export const post_controller = (req: Request, res: Response) => {
  res.send("<h1>This is post controller</h1>");
};
