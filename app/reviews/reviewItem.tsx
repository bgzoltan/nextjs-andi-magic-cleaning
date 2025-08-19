"use client";
import { NextFont } from "next/dist/compiled/@next/font";
import { ReviewI } from "../db/schema";
import { FaStar } from "react-icons/fa";
import style from "./reviews.module.css";
import ReviewModal from "./reviewModal";
import { useState } from "react";

export interface ReviewItemI {
  review: ReviewI;
  rubikGlitchFont: NextFont;
  rudaFont: NextFont;
}
export default function ReviewItem({
  review,
  rubikGlitchFont,
  rudaFont,
}: ReviewItemI) {
  const [isModal, setIsModal] = useState(false);

  const handleClick = () => {
    setIsModal(isModal ? false : true);
  };

  return (
    <>
      <div className={style.card}>
        <div className={`${style.cardTitle}  ${rubikGlitchFont.className}`}>
          {review.client}
        </div>
        <div className={`${style.serviceType}  `}>
          <b>{`${review.serviceType} CLEANING`}</b>
        </div>
        <div className={`${style.serviceType}  `}>
          {new Array(review.evaluation).fill(
            <FaStar size="18" className={style.stars} />
          )}
        </div>
        <div className={style.cardText}>{review.shortDescription}</div>
        <div className={style.buttonContainer}>
          <button onClick={handleClick} className={`primaryButton ${rudaFont.className}`}>
            {review.button}
          </button>
        </div>
      </div>
      {isModal && <ReviewModal review={review} handleClick={handleClick} />}
    </>
  );
}
