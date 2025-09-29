"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { ReviewI } from "../db/schema";

interface ReviewContextI {
  selectedReview: ReviewI | null;
  setSelectedReview: (review: ReviewI | null) => void;
}

const ReviewContext = createContext<ReviewContextI | undefined>(undefined);

export const ReviewProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedReview, setSelectedReview] = useState<ReviewI | null>(null);

  return (
    <ReviewContext.Provider value={{ selectedReview, setSelectedReview }}>
      {children}
    </ReviewContext.Provider>
  );
};

export function useReview() {
  const context = useContext(ReviewContext);
  if (!context) {
    throw new Error("useReview must be used within a ReviewProvider");
  }
  return context;
}
