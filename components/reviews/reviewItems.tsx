"use client";
import { NextFont } from "next/dist/compiled/@next/font";
import { ReviewResponse } from "../../app/(server)/db/schema";
import { useListReviews } from "../../hooks/customHooks";
import ReviewItem from "./reviewItem";
import style from "./reviews.module.css";

export interface ReviewItemsI {
  rubikGlitchFont: NextFont;
  rudaFont: NextFont;
}

export default function ReviewItems({
  rubikGlitchFont,
  rudaFont,
}: ReviewItemsI) {
  const { error, reviews, loading }: ReviewResponse = useListReviews();

  return (
    <div className={style.container}>
      {loading == true && <p>Loading...</p>}
      {reviews.map((review) => (
        <ReviewItem
          review={review}
          rubikGlitchFont={rubikGlitchFont}
          rudaFont={rudaFont}
          key={review.client}
        />
      ))}
      {error && <p>{error}</p>}
    </div>
  );
}
