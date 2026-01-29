import AboutSummary from "./aboutSummary";
import { AboutDetails } from "./aboutDetails";
import { rubikGlitchFont, rudaFont } from "../layout";

export default function AboutUs() {
  return (
    <>
      <AboutSummary rubikGlitchFont={rubikGlitchFont} rudaFont={rudaFont} />
      <AboutDetails rubikGlitchFont={rubikGlitchFont} rudaFont={rudaFont} />
    </>
  );
}
