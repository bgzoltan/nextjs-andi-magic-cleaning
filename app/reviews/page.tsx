"use client";
import axios from 'axios'
import { useEffect, useState } from "react";
import style from "./reviews.module.css";
import { Review } from "../api/reviews/route";
import useReviews from '../hooks/hooks';

export default function Page() {
  const reviews:Review[]=useReviews();

  return (
    <ul className={style.container}>
      {reviews.map((item) => (
        <li key={item.client}>{item.client} </li>
      ))}
    </ul>
  );
}
