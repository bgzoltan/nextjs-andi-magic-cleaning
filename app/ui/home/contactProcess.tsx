import style from "./reviews.module.css";
import { rubikGlitchFont } from "@/app/layout";

export const ContactProcessSection = () => {
  return (
    <section className={`${style.container}`}>
      <div className={`${style.sectionTitle} ${rubikGlitchFont.className}`}>
        Contact process
      </div>
    </section>
  );
};
