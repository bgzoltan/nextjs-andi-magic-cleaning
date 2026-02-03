import { dbConnect } from "../mongoose";
import { Inquiry, InquiryI } from "@/app/db/schema";

//  POST /api/inquiries
export async function POST(request: Request) {
  try {
    await dbConnect();
    const inquiry: InquiryI = await request.json();

    const newInquiry = new Inquiry(inquiry);
    await newInquiry.save();
    return new Response("Success", {
      status: 200,
      headers: { "Content-Type": "text/plain" },
    });
  } catch (err: any) {
    console.error("Error saving inquiry:", err);
    const message = err.message || "Internal Server Error";
    const status = err.status || 500;
    return new Response(message, { status });
  }
}

//  GET by email /api/inquiries
export async function GET(request: Request) {
  try {
    await dbConnect();
    // There is no request.query like in Express but with new URL I can get query params from the Fetch API Request
    const { searchParams } = new URL(request.url);
    const email = searchParams.get("email");
    if (!email) {
      return new Response("Email query parameter is required", { status: 400 });
    }

    // Find inquiry by email
    const inquiry = await Inquiry.findOne({ email: email });
    if (!inquiry) {
      return new Response("Inquiry not found!", { status: 404 });
    }
    // Return the inquiry data as JSON
    return new Response(JSON.stringify(inquiry), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err: any) {
    console.error("Error get inquiry:", err);
    const message = err.message || "Internal Server Error";
    const status = err.status || 500;
    return new Response(message, { status });
  }
}
