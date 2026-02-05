import ServicesSummary from "../../../components/services/servicesSummary";
import { rubikGlitchFont, rudaFont } from "../../layout";
import { HomeCleaning } from "../../../components/services/homeCleaning";
import { OfficeCleaning } from "../../../components/services/officeCleaning";
import { BondCleaning } from "../../../components/services/bondCleaning";

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
