import { dbConnect } from "../../mongoose";
import { Review, ReviewI } from "@/app/(server)/db/schema";

export async function GET() {
  try {
    await dbConnect();
    const items = await Review.find().sort("client");
    // return NextResponse.json(items); -- Middleware esetén célszerűbb ezt használnié a Response object kiterjesztett változata, viszont importálni kell
    // * A Response object NodeJS 18.00 felett a Fetch API része és globálisan elérhető ezért nem kell importálni
    // * A Response.json automatikusan status: 200, headers: { "Content-Type": "application/json" } értékeket állít be ha én nem módosítom
    return Response.json(items);
    // return Response.json(items,{status:200,  headers: { "Content-Type": "application/json" }  });
  } catch (err: any) {
    console.log(err);
    return Response.json(
      { error: err.message ? err.message : "Failed to fetch reviews" },
      { status: err.status ? err.status : 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    await dbConnect();
    const review: ReviewI = await request.json();

    const newReview = new Review(review);
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
