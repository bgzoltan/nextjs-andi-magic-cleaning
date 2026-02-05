import ContactDetails from "../../../components/contact/contactDetails";
import { rubikGlitchFont, rudaFont } from "../../layout";

export default async function ContactUs() {
  return (
    <>
      <ContactDetails rubikGlitchFont={rubikGlitchFont} rudaFont={rudaFont} />
    </>
  );
}
