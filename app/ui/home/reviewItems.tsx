"use client";
import { useState } from "react";
import style from "./reviews.module.css";
import { FaStar } from "react-icons/fa";
import { NextFont } from "next/dist/compiled/@next/font";
import { useListReviews } from "@/app/hooks/hooks";


interface ReviewItems {
  rudaFont:NextFont;
  rubikGlitchFont: NextFont;
}

export const ReviewItems = ({ rudaFont, rubikGlitchFont }: ReviewItems) => {
    const {reviews} = useListReviews();
  const [startReview, setStartReview] = useState(0);

  const nextReview = () => {
    setStartReview(startReview<reviews.length-1 && startReview+4<reviews.length ? startReview + 1:startReview);
  };

  const previousReview = () => {
    setStartReview(startReview>0 ? startReview - 1:startReview);
  };

  return (
    <div className={style.cardsContainer}>
      <button className={`primaryButton`} onClick={() => previousReview()}>{"<"}</button>
      {reviews.slice(startReview, startReview+4).map((review) => (
        <div className={style.card} key={review.client}>
          <div className={`${style.cardTitle}  ${rubikGlitchFont.className}`}>{review.client}</div>
          <div className={`${style.serviceType}  `}><b>{`${review.serviceType} CLEANING`}</b></div>
          <div className={`${style.serviceType}  `}>
            {new Array(review.evaluation).fill(
              <FaStar size="18" className={ style.stars} />
            )}
          </div>
          <div className={style.cardText}>{review.shortDescription}</div>
          <div className={style.buttonContainer}>
            <button className={`primaryButton ${rudaFont.className}`}>{review.button}</button>
          </div>
        </div>
      ))}
      <button className={`primaryButton`} onClick={() => nextReview()}>{">"}</button>
    </div>
  );
};
