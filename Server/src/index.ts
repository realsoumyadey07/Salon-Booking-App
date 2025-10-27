import dotenv from "dotenv";
dotenv.config();
import express, { Request, Response, NextFunction } from "express";
import cookieParser from "cookie-parser";
import ErrorMiddleware from "./middlewares/error.middleware";
import connectDB from "./utils/db";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/test", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    success: true,
    message: "server is running!",
  });
});

// handle unknown routes
app.use(/.*/, (req: Request, res: Response, next: NextFunction) => {
  const err = new Error(`Route ${req.originalUrl} is not found`) as any;
  err.statusCode = 404;
  next(err);
});

app.use(ErrorMiddleware);

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`✅ Server is running on: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("❌ Db connection failed!", err);
  });
