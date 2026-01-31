import ContactDetails from "./contactDetails";
import { rubikGlitchFont, rudaFont } from "../layout";

export default async function ContactUs() {
  return (
    <>
      <ContactDetails rubikGlitchFont={rubikGlitchFont} rudaFont={rudaFont} />
    </>
  );
}
