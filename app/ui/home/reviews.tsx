'use client'

import style from "./reviews.module.css";
import { FaStar } from "react-icons/fa";
import { ReviewItems } from "./reviewItems";
import useReviews from "@/app/hooks/hooks";

export const ReviewsSections = () => {
   const reviews=useReviews()

  return (
    <section className={`${style.container}`}>
      <ReviewItems reviews={reviews} />
    </section>
  );
};
