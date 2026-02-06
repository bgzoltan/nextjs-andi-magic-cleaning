import { NextFont } from "next/dist/compiled/@next/font";
import style from "./reviewSymmary.module.css";
import { QualityFeature } from "./qualityFeature";

export interface ReviewSummaryI {
  rubikGlitchFont: NextFont;
  rudaFont: NextFont;
}

export default function ReviewSummary({
  rubikGlitchFont,
  rudaFont,
}: ReviewSummaryI) {
  return (
    <section>
      <div className={`${style.container} ${rudaFont.className}`}>
        <h1 className={`${rubikGlitchFont.className} ${style.title}`}>
          Customer Reviews & Testimonials
        </h1>
        <h2>
          <b>See what our clients say in the Gold Coast</b>
        </h2>
        <p className={style.description}>
          Our customers feedback paints a clear picture: a trustworthy, highly
          competent cleaning service that delivers on its promises — leading to
          high customer satisfaction and loyal repeat business.
        </p>
        <QualityFeature />
      </div>
    </section>
  );
}
