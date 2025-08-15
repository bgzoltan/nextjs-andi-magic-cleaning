import { useEffect, useState } from "react";
import axios from 'axios'
import { ReviewI } from "../db/schema";

export function useListReviews() {
  const [reviews, setReviews] = useState<ReviewI[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("/api/reviews");
        setReviews(data);
      } catch (err: any ) {
        console.error(err.message? err.message:"Error fetching reviews:", err);
        setError(err.message ? err.message:"Failed to fetch reviews.");
        setReviews([]); 
      } finally {
        setLoading(false);
      }
    };
    fetchApi();
  }, []);

  return { reviews, loading, error };
}

export async function addReview(review:ReviewI) {

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response=await axios.post("api/reviews",review);
        return response;
      } catch (err) {
        console.error("Error", err);
        return err;
      }
    };
    fetchApi();
  }, [])
}