"use client";
import { useState } from "react";
import style from "./reviews.module.css";
import { FaStar } from "react-icons/fa";
import { NextFont } from "next/dist/compiled/@next/font";
import { useListReviews } from "@/app/hooks/hooks";
import { useReview } from "@/app/globalStates/selectedReview";
import { ReviewI } from "@/app/db/schema";
import Link from "next/link";

interface ReviewItems {
  rudaFont: NextFont;
  rubikGlitchFont: NextFont;
}

export const ReviewItems = ({ rudaFont, rubikGlitchFont }: ReviewItems) => {
  const { reviews } = useListReviews();
  const [startReview, setStartReview] = useState(0);

  const nextReview = () => {
    setStartReview(
      startReview < reviews.length - 1 && startReview + 4 < reviews.length
        ? startReview + 1
        : startReview
    );
  };

  const previousReview = () => {
    setStartReview(startReview > 0 ? startReview - 1 : startReview);
  };

  const { setSelectedReview } = useReview();

  const handleClick = (review: ReviewI) => {
    setSelectedReview(review);
  };

  return (
    <div className={style.cardsContainer}>
      <button className={`primaryButton`} onClick={() => previousReview()}>
        {"<"}
      </button>
      {reviews.slice(startReview, startReview + 4).map((review) => (
        <div className={style.card} key={review.address}>
          <div className={`${style.cardTitle}  ${rubikGlitchFont.className}`}>
            {review.client}
          </div>
          <div className={`${style.serviceType}  `}>
            <b>{`${review.serviceType} CLEANING`}</b>
          </div>
          <div className={`${style.serviceType}  `}>
            {Array.from({ length: review.evaluation }, (_, i) => (
              <FaStar key={i} size={18} className={style.stars} />
            ))}
          </div>
          <div className={style.cardText}>{review.shortDescription}</div>
          <div className={style.buttonContainer}>
            <Link
              href={"/reviews"}
              onClick={() => handleClick(review)}
              className={`primaryButton ${rudaFont.className}`}
            >
              {review.button}
            </Link>
          </div>
        </div>
      ))}
      <button className={`primaryButton`} onClick={() => nextReview()}>
        {">"}
      </button>
    </div>
  );
};
