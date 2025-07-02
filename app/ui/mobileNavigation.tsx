"use client";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import style from "./mobileNavigation.module.css";
import { Navigation } from "./navigation";

export const MobileNavigation = () => {
  const [isShowNavigation, setIsShowNavigation] = useState(false);

  const showNavigation = () => {
    setIsShowNavigation(isShowNavigation == false ? true : false);
  };

  return (
    <>
      <button
        className={style.horizontalContainer}
        onClick={showNavigation}
      >
        <RxHamburgerMenu size={34} />
      </button>
      {isShowNavigation && <Navigation showNavigation={showNavigation} />}
    </>
  );
};
