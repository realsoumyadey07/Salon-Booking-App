import express from "express";
import { userRagistration } from "../controllers/user.controller";

const userRouter = express.Router();

userRouter.post("/registration", userRagistration);

export default userRouter;