import ServicesSummary from "./servicesSummary";
import { rubikGlitchFont, rudaFont } from "../layout";
import { HomeCleaning } from "./homeCleaning";
import { OfficeCleaning } from "./officeCleaning";
import { BondCleaning } from "./bondCleaning";

export default function Services() {
  return (
    <>
      <ServicesSummary rubikGlitchFont={rubikGlitchFont} rudaFont={rudaFont} />
      <HomeCleaning rubikGlitchFont={rubikGlitchFont} rudaFont={rudaFont} />
      <OfficeCleaning rubikGlitchFont={rubikGlitchFont} rudaFont={rudaFont} />
      <BondCleaning rubikGlitchFont={rubikGlitchFont} rudaFont={rudaFont} />
    </>
  );
}
