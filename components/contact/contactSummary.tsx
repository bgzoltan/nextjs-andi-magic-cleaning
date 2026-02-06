import { NextFont } from "next/dist/compiled/@next/font";
import style from "./contactSymmary.module.css";

export interface ContactSummaryI {
  rubikGlitchFont: NextFont;
  rudaFont: NextFont;
}

export default function ContactSummary({
  rubikGlitchFont,
  rudaFont,
}: ContactSummaryI) {
  return (
    <section className={`${style.container} ${rudaFont.className}`}>
      <h1 className={`${rubikGlitchFont.className} ${style.descriptionTitle}`}>
        Contact Magic Andi Cleaning Service
      </h1>
      <h2>
        <b>Professional Home, Office & Bond Cleaning in the Gold Coast</b>
      </h2>
      <p className={style.description}>
        Have questions or want to book a cleaning service?{" "}
        <b>Magic Andi Cleaning</b> is here to help! We provide professional{" "}
        <b>home, office, and bond cleaning services</b> throughout Gold Coast.
        Our friendly team is ready to answer your inquiries and schedule a
        cleaning tailored to your needs.
      </p>
    </section>
  );
}
