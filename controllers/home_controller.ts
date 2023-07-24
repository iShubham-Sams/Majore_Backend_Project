import { Response, Request } from "express";

export const homeController = (req: Request, res: Response) => {
  return res.end("<h1>Express is up for the codial</h1>");
};
