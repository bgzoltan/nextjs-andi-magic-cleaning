"use client";
import style from "./reviews.module.css";
import { useListReviews, addReview } from "../hooks/hooks";
import { ReviewResponse } from "../db/schema";

export default function Page() {
  // try {
  //   addReview({
  //     client: "Mathew",
  //     serviceType: ServiceType.HOME,
  //     date: "2024, 2025",
  //     address: "Surfers Paradise",
  //     shortDescription: "Excellent cleaning service.",
  //     evaluation: 5,
  //     button: "Get more...",
  //     link: "",
  //   });
  // } catch (err: any) {
  //   return <>{`${err.message}`}</>;
  // }

  const { error, reviews, loading }: ReviewResponse = useListReviews();

  return (
    <>
      {loading == true && <p>Loading...</p>}
      <div className={style.container}>
        {reviews.map((item) => (
          <div className={style.card}>
            <p key={item.client}>{item.client}</p>
            <p key={item.client}>{item.serviceType}</p>
            <p key={item.client}>{item.shortDescription}</p>
          </div>
        ))}
      </div>
      {error && <p>{error}</p>}
    </>
  );
}
