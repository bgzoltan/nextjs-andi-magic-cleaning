import styles from "./page.module.css";
import { ContactProcessSection } from "./ui/home/contactProcess";
import { rudaFont } from "@/app/layout";
import { ReviewsSections } from "./ui/home/reviews";
import { ServicesSection } from "./ui/home/services";
import { ServicesDetailsSection } from "./ui/home/servicesDetails";
import { WelcomeSection } from "./ui/home/welcome";

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
