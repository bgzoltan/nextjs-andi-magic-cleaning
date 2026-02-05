import styles from "./page.module.css";
import { ContactProcessSection } from "../../components/home/contactProcess";
import { rudaFont } from "@/app/layout";
import { ReviewsSections } from "../../components/home/reviews";
import { ServicesSection } from "../../components/home/services";
import { ServicesDetailsSection } from "../../components/home/servicesDetails";
import { WelcomeSection } from "../../components/home/welcome";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={`${styles.main} ${rudaFont.className}`}>
        <WelcomeSection />
        <ServicesSection />
        <ServicesDetailsSection />
        <ContactProcessSection />
        <ReviewsSections />
      </main>
    </div>
  );
}
