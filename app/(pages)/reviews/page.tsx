import { rubikGlitchFont, rudaFont } from "../../layout";
import ReviewItems from "../../../components/reviews/reviewItems";
import ReviewSummary from "../../../components/reviews/reviewSummary";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Read real customer reviews of Magic Andi Cleaning. Discover why homeowners and businesses in Gold Coast trust us for professional home and office cleaning services. Book your cleaning today and experience the Magic Andi difference!",
};

export default function Page() {
  return (
    <main>
      <ReviewSummary rubikGlitchFont={rubikGlitchFont} rudaFont={rudaFont} />
      <ReviewItems rubikGlitchFont={rubikGlitchFont} rudaFont={rudaFont} />
    </main>
  );
}
