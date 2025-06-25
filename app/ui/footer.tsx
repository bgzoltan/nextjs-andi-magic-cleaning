import style from "./footer.module.css";
import { FiPhone, FiMail } from "react-icons/fi";
import Link from "next/link";
import { rubikGlitchFont,rudaFont } from "../layout";

export const Footer = () => {
  return (
    <div className={style.container}>
      <div
        className={`${style.verticalContainer} ${rubikGlitchFont.className}`}
      >
        <div className={`${style.horizontalContainer} ${style.highlightedText}`}>
          Professional Cleaning Services &nbsp;
          <span className={style.text}>on the Gold Coast</span>
        </div>

        <div
          className={`${style.horizontalContainer} ${style.textAndIconsContainer} ${rubikGlitchFont.className}`}
        >
          <div></div>
          <div className={style.iconsContainer}>
            <div className={style.icon}>
              <FiMail size={24} />
            </div>
            magicandi@gmail.com
          </div>
          <div className={style.iconsContainer}>
            <div className={style.icon}>
              <FiPhone size={24} />
            </div>
            +61 481 764 707
          </div>
          <div></div>
        </div>
        <div className={` ${style.copyright} ${rudaFont.className}`}>Copyright: Zoltan Bagdany, frontend developer 2025</div>
      </div>
    </div>
  );
};
