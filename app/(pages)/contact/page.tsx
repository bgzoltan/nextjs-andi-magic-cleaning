import ContactDetails from "../../../components/contact/contactDetails";
import { rubikGlitchFont, rudaFont } from "../../layout";
import type { Metadata } from "next";

// Metadata to improve SEO and provide information about the page.
export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Magic Andi Cleaning for home, office, or bond cleaning services in Gold Coast. Contact us today for a free quote or booking.",
};

export default async function ContactUs() {
  return (
    <>
      <ContactDetails rubikGlitchFont={rubikGlitchFont} rudaFont={rudaFont} />
    </>
  );
}
