import style from "./services.module.css";
import { rubikGlitchFont, rudaFont } from "@/app/layout";

export const ServicesSection = () => {
  return (
    <section className={style.container}>
      <div
        className={`${style.subContainer} ${rubikGlitchFont.className} ${style.title}`}
      >
        What I do
      </div>
      
      <div
        className={`${style.subContainer} ${style.middleContainer} ${style.servicesText} ${rudaFont.className}`}
      >
        <p>STANDARD ROOMS</p>
        <p>KITCHENS</p>
        <p>BATHROOMS</p>
        <p>SHOWERS & BATHS</p>
        <p>TOILETS</p>
        <p>BALCONIES</p>
      </div>

      <div
        className={`${style.subContainer} ${style.servicesText} ${rudaFont.className}`}
      >
        <p>Vacuuming</p>
        <p>Moping</p>
        <p>Wall and door washing</p>
        <p>Window cleaning</p>
        <p>Carpet cleaning</p>
        <p>Oven interior cleaning</p>
        <p>Anti-mould treatment</p>
        <p>Disinfecting floors</p>
      </div>
    </section>
  );
};
