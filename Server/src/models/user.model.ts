import { Model, model, Schema } from "mongoose";
import { IBaseUser, IStylist } from "../types/user.types";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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
      required: true,
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
    refresh_token: {
      type: String,
    },
  },
  {
    timestamps: true,
    discriminatorKey: "role",
  }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = async function (enteredPassword: string) {
  return await bcrypt.compare(enteredPassword, this.password);
}

userSchema.methods.signAccessToken = function () {
  return jwt.sign(
    {
      id: this._id,
    },
    process.env.ACCESS_TOKEN as string
  );
};

userSchema.methods.signRefreshToken = function () {
  return jwt.sign(
    {
      id: this._id,
    },
    process.env.REFRESH_TOKEN as string
  );
};

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
