import { NextFunction, Response } from "express";

export const CatchAsyncError = (theFnc: any) => (req: Request, res: Response, next: NextFunction)=> {
    Promise.resolve(theFnc(req, res, next)).catch(next);
}