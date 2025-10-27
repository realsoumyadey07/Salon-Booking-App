import { NextFunction, Request, Response } from "express";
import { CatchAsyncError } from "../middlewares/catchasyncerror.middleware";

export const userRagistration = CatchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    
  }
);
