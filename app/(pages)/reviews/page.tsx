import { rubikGlitchFont, rudaFont } from "../../layout";
import ReviewItems from "../../../components/reviews/reviewItems";
import ReviewSummary from "../../../components/reviews/reviewSummary";

export default function Page() {
  return (
    <>
      <ReviewSummary rubikGlitchFont={rubikGlitchFont} rudaFont={rudaFont} />
      <ReviewItems rubikGlitchFont={rubikGlitchFont} rudaFont={rudaFont} />
    </>
  );
}
