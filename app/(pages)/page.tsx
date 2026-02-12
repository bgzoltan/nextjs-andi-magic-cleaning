import styles from "./page.module.css";
import { ContactProcessSection } from "../../components/home/contactProcess";
import { rudaFont } from "@/app/layout";
import { ReviewsSections } from "../../components/home/reviews";
import { ServicesSection } from "../../components/home/services";
import { ServicesDetailsSection } from "../../components/home/servicesDetails";
import { WelcomeSection } from "../../components/home/welcome";

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Magic Andi Cleaning",
    image: "https://magicandicleaning.com/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Aqua street",
      addressLocality: "Gold Coast",
      postalCode: "4215",
      addressCountry: "AU",
    },
    telephone: "+61 481 764 xxx",
    url: "https://magicandicleaning.com",
  };

  return (
    <div className={styles.page}>
      <main className={`${styles.main} ${rudaFont.className}`}>
        <WelcomeSection />
        <ServicesSection />
        <ServicesDetailsSection />
        {/* <ContactProcessSection /> */}
        <ReviewsSections />
      </main>
    </div>
  );
}
