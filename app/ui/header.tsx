import Image from "next/image";
import style from "./header.module.css";
import { FiPhone } from "react-icons/fi";
import { rubikGlitchFont } from "../layout";
import { Navigation } from "./navigation";

export const Header = () => {
  return (
    <div className={style.container}>
      <div className={style.horizontalContainer}>
        <Image
          src="/drawings/girl.png"
          alt="Cleaning girl"
          width={93}
          height={204}
          priority
        />
      </div>
      <div
        className={`${style.verticalContainer} ${rubikGlitchFont.className}`}
      >
        <div className={style.title}>Andi Magic Cleaning</div>
        <div className={style.subTitle}>Gold Coast</div>
      </div>
      <div className={style.horizontalContainer}>
        <div className={`${style.phone} ${rubikGlitchFont.className}`}>
          <div className={style.phoneIcon}>
            <FiPhone size={24} />
          </div>
          +61 481 764 707
        </div>
        <Navigation />
      </div>
      {/* <FiPhone /> Phone number: +61-425-290-589</div> */}
    </div>
  );
};
