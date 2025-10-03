import { rubikGlitchFont, rudaFont } from "../layout";
import ReviewItems from "./reviewItems";
import ReviewSummary from "./reviewSummary";

export default function Page() {
  return (
    <>
      <ReviewSummary rubikGlitchFont={rubikGlitchFont} rudaFont={rudaFont} />
      <ReviewItems rubikGlitchFont={rubikGlitchFont} rudaFont={rudaFont} />
    </>
  );
}
