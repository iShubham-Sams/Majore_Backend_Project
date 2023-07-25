import { Response, Request } from "express";

export const homeController = (req: Request, res: Response) => {
  res.cookie("user_id", 25);
  return res.end("<h1>Express is up for the codial</h1>");
};
