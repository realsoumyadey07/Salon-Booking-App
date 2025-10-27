import { Model, model, Schema } from "mongoose";
import { IBaseUser, IStylist } from "../types/user.types";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const userSchema = new Schema<IBaseUser>(
  {
    name: {
      type: String,
      required: [true, "name is required!"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "email is required!"],
      unique: true,
      trim: true,
      validate: {
        validator: function (value) {
          return emailRegex.test(value);
        },
      },
      message: "Invalid email format!",
    },
    password: {
      type: String,
      required: [true, "password is required!"],
    },
    role: {
      type: String,
      default: "user",
      enum: ["user", "admin", "stylist"],
      required: true
    },
    phone: {
      type: String,
    },
    gender: {
      type: String,
    },
    avatar: {
      url: String,
      public_id: String,
    },
  },
  {
    timestamps: true,
    discriminatorKey: "role",
  }
);

export const User: Model<IBaseUser> = model<IBaseUser>("User", userSchema);

const stylistSchema = new Schema<IStylist>({
  experience: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  specialities: [
    {
      type: Schema.Types.ObjectId,
      ref: "service",
      required: true,
    },
  ],
});

export const Stylist: Model<IStylist> = User.discriminator<IStylist>(
  "Stylist",
  stylistSchema
);
