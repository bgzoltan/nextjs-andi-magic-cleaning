import { NextFont } from "next/dist/compiled/@next/font";
import style from "./aboutSymmary.module.css";

export interface AboutSummaryI {
  rubikGlitchFont: NextFont;
  rudaFont: NextFont;
}

export default function AboutSummary({
  rubikGlitchFont,
  rudaFont,
}: AboutSummaryI) {
  return (
    <section className={`${style.container} ${rudaFont.className}`}>
      <h1 className={`${rubikGlitchFont.className} ${style.descriptionTitle}`}>
        Welcome to Your Trusted Cleaning Service
      </h1>
      <h2>
        <b>Professional Home & Office Cleaning in the Gold Coast</b>
      </h2>
      <p className={style.description}>
        We take care of the tasks you might not enjoy—but are essential for
        feeling truly comfortable in your home or workplace. By letting us
        handle the cleaning, <b>you save valuable time </b>that you can spend
        more efficiently or simply enjoyably, whether alone or with your family.
      </p>
    </section>
  );
}
