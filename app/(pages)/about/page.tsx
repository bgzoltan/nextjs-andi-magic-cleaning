import AboutSummary from "../../../components/about/aboutSummary";
import { AboutDetails } from "../../../components/about/aboutDetails";
import { rubikGlitchFont, rudaFont } from "../../layout";
import type { Metadata } from "next";

// Metadata to improve SEO and provide information about the page.
export const metadata: Metadata = {
  title: "Abous Us",
  description:
    "Meet the team behind Magic Andi Cleaning! Discover why we're the trusted choice for reliable home cleaning in the Gold Coast, Australia. Read our mission & book today!",
};

export default function AboutUs() {
  return (
    <main>
      <AboutSummary rubikGlitchFont={rubikGlitchFont} rudaFont={rudaFont} />
      <AboutDetails rubikGlitchFont={rubikGlitchFont} rudaFont={rudaFont} />
    </main>
  );
}
