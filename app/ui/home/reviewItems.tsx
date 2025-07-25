"use client";
import { useState } from "react";
// import { rubikGlitchFont, rudaFont } from "@/app/layout";
import style from "./reviews.module.css";
import { FaStar } from "react-icons/fa";

interface ReviewItems {
  reviews: {
    client: string;
    serviceType: string;
    date: string;
    address: string;
    shortDescription: string;
    evaluation: number;
    button: string;
    link: string;
  }[];
}

export const ReviewItems = ({ reviews }: ReviewItems) => {
  const [startReview, setStartReview] = useState(0);

  const nextReview = () => {
    setStartReview(startReview<reviews.length-1 && startReview+4<reviews.length ? startReview + 1:startReview);
  };

  const previousReview = () => {
    setStartReview(startReview>0 ? startReview - 1:startReview);
  };

  return (
    <>
      <button onClick={() => previousReview()}>{"<"}</button>
      {reviews.slice(startReview, startReview+4).map((review) => (
        <div className={style.subContainer} key={review.client}>
          <div className={`${style.client}  `}>{review.client}</div>
          <div className={`${style.serviceType}  `}>{review.serviceType}</div>
          <div className={`${style.serviceType}  `}>
            {new Array(review.evaluation).fill(
              <FaStar size="18" style={{ color: "yellow" }} />
            )}
          </div>
          <div className={style.descriptionText}>{review.shortDescription}</div>
          <div className={style.buttonContainer}>
            <button className={`primaryButton  `}>{review.button}</button>
          </div>
        </div>
      ))}
      <button onClick={() => nextReview()}>{">"}</button>
    </>
  );
};
