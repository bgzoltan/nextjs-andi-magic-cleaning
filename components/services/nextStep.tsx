"use client";
import { useState } from "react";
import { FiMinusSquare, FiPlusSquare } from "react-icons/fi";
import style from "./nextStep.module.css";

export const NextStep = () => {
  const [isModalOpen, setIsModelOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModelOpen(isModalOpen ? false : true);
  };
  return (
    <>
      {isModalOpen ? (
        <div className={style.container}>
          <div className={style.iconContainer}>
            <b>Our pricing and next step? </b>
            <FiMinusSquare
              className={style.iconPlusMinus}
              size={30}
              onClick={handleModalOpen}
            />
          </div>
          <p>
            The cost of this service depends on the size and the current
            condition of your apartment/office and the specific tasks you’d like
            done. We’ll give you a transparent quote upfront, along with a
            detailed cleaning checklist and a clear time estimate — so you know
            exactly what’s included and when the job will be done. Give us a
            call or text us! We'll call you back and after a quick on-site
            visit, we’ll be able to offer you a clear, tailored price.{" "}
            <b>We are confident you will be satisfied.</b>
          </p>
        </div>
      ) : (
        <div className={style.iconContainer}>
          <b>Our pricing and next step? </b>
          <FiPlusSquare
            className={style.iconPlusMinus}
            size={30}
            onClick={handleModalOpen}
          />
        </div>
      )}
    </>
  );
};
