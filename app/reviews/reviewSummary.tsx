import { NextFont } from "next/dist/compiled/@next/font";
import style from "./reviewSymmary.module.css";

export interface ReviewSummaryI {
  rubikGlitchFont: NextFont;
  rudaFont: NextFont;
}

export default function ReviewSummary({
  rubikGlitchFont,
  rudaFont,
}: ReviewSummaryI) {
  return (
    <>
      <div className={`${style.container} ${rudaFont.className}`}>
        <h1 className={rubikGlitchFont.className}>What our customers say</h1>
        <div className={style.decoration}></div>
        <h2>Our customers usually mention the followings</h2>
        <ul className={style.description}>
          <li>
            <strong>High Quality:</strong> Many of our customers highlight the
            thoroughness of our cleaning team, their "attention to detail" and
            the fact that we leave their homes "spotlessly clean".
          </li>
          <li>
            <strong>Professional stuff:</strong> Reviewers consistently describe
            our cleaning team as friendly, punctual, and respectful. Customers
            felt comfortable and confident in our team.
          </li>
          <li>
            <strong>Reliability:</strong> Our team was praised for its reliable
            scheduling and clear communication.
          </li>
          <li>
            <strong>Value for Money:</strong> A number of customers stated that
            the service was a great value for the price. Customers felt that the
            quality of the cleaning and the professionalism of our staff
            justified the cost.
          </li>
        </ul>

        <p className={style.description}>
          Overall, the feedbacks of our customers paint a picture of a
          trustworthy and highly competent cleaning service that delivers on its
          promises, leading to a high level of customer satisfaction and repeat
          business.
        </p>
      </div>
    </>
  );
}
