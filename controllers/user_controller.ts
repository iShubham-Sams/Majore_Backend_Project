import { Response, Request } from "express";
export const userController = (req: Request, res: Response) => {
  res.send("<h1>This is user controller</h1>");
};
