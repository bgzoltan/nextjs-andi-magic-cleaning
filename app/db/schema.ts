import mongoose, { models } from "mongoose";

export enum ServiceType {
  HOME = "HOME",
  OFFICE = "OFFICE",
  BOND = "BOND",
}

const reviewSchema = new mongoose.Schema({
  client: { type: String, required: true },
  serviceType: {
    type: String,
    enum: Object.values(ServiceType),
    required: true,
  },
  date: { type: String, required: true },
  address: { type: String, required: true },
  shortDescription: { type: String, required: true },
  evaluation: { type: Number, min: 1, max: 5 },
  button: { type: String, required: true },
  link: { type: String },
});

export interface ReviewI {
      client: string;
      serviceType: ServiceType;
      date: string;
      address: string;
      shortDescription: string;
      evaluation: number;
      button: string;
      link: string;
    }

export interface ReviewResponse {
  error: string | null;
  reviews: ReviewI[];
  loading: boolean;
}

export const Review = models.Review || mongoose.model("Review", reviewSchema);
