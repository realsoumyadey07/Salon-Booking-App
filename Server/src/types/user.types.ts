import { Document, Schema } from "mongoose";

export type UserRole = "user" | "admin" | "stylist";

export type Avatar = {
    url: string;
    public_id: string;
}

export interface IBaseUser extends Document {
    name: string;
    email: string;
    password: string;
    role: UserRole;
    phone?: string;
    gender?: string;
    avatar?: Avatar;
    refresh_token?: string;
}

export interface IStylist extends IBaseUser {
    experience: number;
    rating: number;
    specialities: Schema.Types.ObjectId[];
}