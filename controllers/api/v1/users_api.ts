import { Request, Response } from "express";
import { User } from "../../../models/user";
const jwt = require("jsonwebtoken");

export const createV1Session = async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user || user.password !== req.body.password) {
      return res.status(422).json({
        message: "Invalid username or password",
      });
    }
    res.cookie(
      "jwt",
      jwt.sign(user.toJSON(), "codeial", { expiresIn: "1000000" })
    );
    return res.status(200).json({
      message: "Sign in successful, here is your token please keep it safe!",
      data: {
        token: jwt.sign(user.toJSON(), "codeial", { expiresIn: "1000000" }),
      },
    });
  } catch (error) {
    console.log("******", error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
