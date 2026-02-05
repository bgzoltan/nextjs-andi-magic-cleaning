import AboutSummary from "../../../components/about/aboutSummary";
import { AboutDetails } from "../../../components/about/aboutDetails";
import { rubikGlitchFont, rudaFont } from "../../layout";

export default function AboutUs() {
  return (
    <>
      <AboutSummary rubikGlitchFont={rubikGlitchFont} rudaFont={rudaFont} />
      <AboutDetails rubikGlitchFont={rubikGlitchFont} rudaFont={rudaFont} />
    </>
  );
}
