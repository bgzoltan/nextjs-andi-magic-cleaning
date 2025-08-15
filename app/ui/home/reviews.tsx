import style from "./reviews.module.css";
import { ReviewItems } from "./reviewItems";
import { rubikGlitchFont, rudaFont } from "@/app/layout";

export const ReviewsSections = () => {
  return (
    <section className={`${style.container}`}>
      <div className={`${style.sectionTitle} ${rubikGlitchFont.className}`}>
        Customer reviews
      </div>
      <ReviewItems rudaFont={rudaFont} rubikGlitchFont={rubikGlitchFont} />
    </section>
  );
};
