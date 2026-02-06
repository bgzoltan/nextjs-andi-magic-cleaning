import ServicesSummary from "../../../components/services/servicesSummary";
import { rubikGlitchFont, rudaFont } from "../../layout";
import { HomeCleaning } from "../../../components/services/homeCleaning";
import { OfficeCleaning } from "../../../components/services/officeCleaning";
import { BondCleaning } from "../../../components/services/bondCleaning";

import type { Metadata } from "next";

// Metadata to improve SEO and provide information about the page.
export const metadata: Metadata = {
  title: "Services",
  description:
    "Magic Andi Cleaning provides professional home, office, and end-of-lease bond cleaning services in Gold Coast, Australia. Reliable, trusted, and quality cleaning for every space. Book your cleaning today and experience the Magic Andi difference!",
};

export default function Services() {
  return (
    <main>
      <ServicesSummary rubikGlitchFont={rubikGlitchFont} rudaFont={rudaFont} />
      <HomeCleaning rubikGlitchFont={rubikGlitchFont} rudaFont={rudaFont} />
      <OfficeCleaning rubikGlitchFont={rubikGlitchFont} rudaFont={rudaFont} />
      <BondCleaning rubikGlitchFont={rubikGlitchFont} rudaFont={rudaFont} />
    </main>
  );
}
