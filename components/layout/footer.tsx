import style from "./footer.module.css";
import { FiPhone, FiMail } from "react-icons/fi";
import { FaRegCopyright } from "react-icons/fa";
import Link from "next/link";
import { rubikGlitchFont, rudaFont } from "../../app/layout";

export const Footer = () => {
  return (
    <>
      <section className={style.largeScreen}>
        <div className={style.container}>
          <div
            className={`${style.verticalContainer} ${rubikGlitchFont.className}`}
          >
            <div
              className={`${style.horizontalContainer} ${style.highLighted}`}
            >
              Professional Cleaning Services &nbsp;
              <span className={style.textPlace}>on the Gold Coast</span>
            </div>

            <div className={style.horizontalContainer}>
              <div className={style.icon}>
                <FiMail size={24} />
              </div>
              <p className={` ${style.contactDetails} ${rudaFont.className}`}>
                magicandi@gmail.com
              </p>

              <div className={style.icon}>
                <FiPhone size={24} />
              </div>
              <p className={` ${style.contactDetails} ${rudaFont.className}`}>
                +61 481 764 xxx
              </p>
            </div>
            <div className={style.horizontalContainer}>
              <p className={style.icon}>
                <FaRegCopyright size={16} />
              </p>
              <p className={` ${style.contactDeveloper} ${rudaFont.className}`}>
                Zoltan Bagdany, fullstack developer, bgzoltab@gmail.com
              </p>
            </div>

            <p className={` ${style.contactDeveloper} ${rudaFont.className}`}>
              NextJs 18.0, TypeScript, MongoDb 2025
            </p>
          </div>
        </div>
      </section>

      <section className={style.mobileScreen}>
        <div className={style.container}>
          <div
            className={`${style.verticalContainer} ${rubikGlitchFont.className}`}
          >
            <span
              className={`${style.horizontalContainer} ${style.highLighted}`}
            >
              Professional Cleaning Services
            </span>
            <span className={style.textPlace}>on the Gold Coast</span>

            <div className={style.horizontalContainer}>
              <div className={style.icon}>
                <FiMail size={24} />
              </div>
              <p className={` ${style.contactDetails} ${rudaFont.className}`}>
                magicandi@gmail.com
              </p>
            </div>
            <div className={style.horizontalContainer}>
              <div className={style.icon}>
                <FiPhone size={24} />
              </div>
              <p className={` ${style.contactDetails} ${rudaFont.className}`}>
                +61 481 764 xxx
              </p>
            </div>
            <div className={style.horizontalContainer}>
              <p className={style.icon}>
                <FaRegCopyright size={16} />
              </p>
              <p className={` ${style.contactDeveloper} ${rudaFont.className}`}>
                Zoltan Bagdany, fullstack developer
              </p>
            </div>
            <p className={` ${style.contactDeveloper} ${rudaFont.className}`}>
              bgzoltab@gmail.com
            </p>
            <p className={` ${style.contactDeveloper} ${rudaFont.className}`}>
              NextJs 18.0, TypeScript, MongoDb 2025
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
