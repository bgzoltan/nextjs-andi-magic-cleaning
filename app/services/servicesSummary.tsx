import { NextFont } from "next/dist/compiled/@next/font";
import style from "./servicesSymmary.module.css";
import Link from "next/link";

export interface ServicesSummaryI {
  rubikGlitchFont: NextFont;
  rudaFont: NextFont;
}

export default function ServicesSummary({
  rubikGlitchFont,
  rudaFont,
}: ServicesSummaryI) {
  return (
    <>
      <div className={`${style.container} ${rudaFont.className}`}>
        <h1
          className={`${rubikGlitchFont.className} ${style.descriptionTitle}`}
        >
          Our cleaning services
        </h1>
        <div className={style.decoration}></div>
        <h2>Call us to 'Clean Your Living Space'</h2>

        <p className={style.description}>
          <b>Our cleaning services are here to make your life easier </b>— at
          home, at work, and when you’re moving out. From regular
          <Link className={style.links} href="#homeCleaning">
            {" "}
            home cleaning{" "}
          </Link>
          and{" "}
          <Link className={style.links} href="#officeCleaning">
            {" "}
            office cleaning{" "}
          </Link>{" "}
          to detailed{" "}
          <Link className={style.links} href="#bondCleaning">
            {" "}
            bond cleaning{" "}
          </Link>
          , we tailor every service to your needs. Whether it’s day-to-day
          upkeep, a one-off deep clean, or preparing your property for
          inspection or leaving, our professional team ensures your space feels
          fresh, healthy, and welcoming.
        </p>
      </div>
    </>
  );
}
