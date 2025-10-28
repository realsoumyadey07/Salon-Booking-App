import { NextFunction, Request, Response } from "express";
import { CatchAsyncError } from "../middlewares/catchasyncerror.middleware";
import { User } from "../models/user.model";

interface IRegistration {
  name: string;
  email: string;
  password: string;
}

export const userRagistration = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    let { name, email, password } = req.body as IRegistration;
    if ([name, email, password].some((i) => i === ""))
      return res.status(400).json({
        success: false,
        message: "all fields are required!",
      });
    try {
      const userExists = await User.findOne({
        email,
      });

      if (userExists)
        return next(
          res.status(400).json({
            success: false,
            message: "email already exists!",
          })
        );

      const newUser = {
        name,
        email,
        password,
      };
      const user = await User.create(newUser);
      if (!user) {
        return next(
          res.status(400).json({
            success: false,
            message: "user is not created!",
          })
        );
      }
      const { access_token, refresh_token } = await generateTokens(
        user._id as string
      );

      return next(
        res.status(200).json({
          success: true,
          user,
          access_token,
          refresh_token,
          message: "user registered successfully!",
        })
      );
    } catch (error: any) {
      return next(
        res.status(500).json({
          success: false,
          message: error.message || "something went wrong while registering!",
        })
      );
    }
  }
);

interface IGenerateToken {
  access_token: string;
  refresh_token: string;
}

const generateTokens = async (userId: string): Promise<IGenerateToken> => {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }
    const access_token = user.signAccessToken();
    const refresh_token = user.signRefreshToken();
    user.refresh_token = refresh_token;
    await user?.save({
      validateBeforeSave: false,
    });
    return {
      access_token,
      refresh_token,
    };
  } catch (error: any) {
    throw new Error(
      error.message ||
        "something went wrong while generating access and refresh token!"
    );
  }
};
