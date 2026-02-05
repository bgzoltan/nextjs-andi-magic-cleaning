import mongoose from "mongoose";

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
  shortDescription: { type: String, required: false },
  description: { type: String },
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
  description: string;
  evaluation: number;
  button: string;
  link: string;
}

export interface ReviewResponse {
  error: string | null;
  reviews: ReviewI[];
  loading: boolean;
}

// Mongoose Model for Review / It is important to ensure that the model is not redefined and not undefined, because in a serverless environment like Next.js, the code can be re-executed multiple times, leading to model redefinition errors.
export const Review =
  mongoose.models?.Review || mongoose.model<ReviewI>("Review", reviewSchema);

export const inquirySchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  email: { type: String, required: true },
  suburb: { type: String, required: true },
  areaSquareMeters: { type: Number, required: true },
  numberOfRooms: { type: Number, required: true },
  numberOfBathrooms: { type: Number, required: true },
  serviceType: {
    type: String,
    enum: Object.values(ServiceType),
    required: true,
  },
  otherMessage: { type: String, required: false },
});

export interface InquiryI {
  firstName: string;
  lastName: string;
  mobileNumber: string;
  email: string;
  suburb: string;
  areaSquareMeters: number;
  numberOfRooms: number;
  numberOfBathrooms: number;
  serviceType: ServiceType;
  otherMessage: string;
}

export const Inquiry =
  mongoose.models?.Inquiry ||
  mongoose.model<InquiryI>("Inquiry", inquirySchema);

export interface InquiryResponse {
  error: string | null;
  inquiries: InquiryI[];
  loading: boolean;
}
