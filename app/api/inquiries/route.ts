import { dbConnect } from "../mongoose";
import { Inquiry, InquiryI } from "@/app/db/schema";

//
export async function POST(request: Request) {
  try {
    await dbConnect();
    const inquiry: InquiryI = await request.json();

    const newReview = new Inquiry(inquiry);
    const response = await newReview.save();
    return new Response("Success", {
      status: 200,
      headers: { "Content-Type": "text/plain" },
    });
  } catch (err: any) {
    console.error("Error saving review:", err);
    const message = err.message || "Internal Server Error";
    const status = err.status || 500;
    return new Response(message, { status });
  }
}
