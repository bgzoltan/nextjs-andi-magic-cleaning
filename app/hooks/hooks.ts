import { useEffect, useState } from "react";
import axios from 'axios'
import { Review } from "../api/reviews/route";

export default function useReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const {data} = await axios.get("api/reviews");
        setReviews(data);
      } catch (err) {
        console.error("Error", err);
      }
    };
    fetchApi();
  }, [])
  return reviews
}