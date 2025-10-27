import { Document } from "mongoose";

export type ServiceImage = {
    url: string;
    public_id: string;
}

export interface IService extends Document {
    name: string;
    description: string;
    price: number;
    duration: number;
    images: ServiceImage[];
}