import style from "./services.module.css";
import { rubikGlitchFont, rudaFont } from "@/app/layout";

export const ServicesSection = () => {
  return (
    <section className={style.container}>
      <div
        className={`${style.subContainer} ${rubikGlitchFont.className} ${style.title}`}
      >
        We can do
      </div>
      <div className={style.subContainer}>
        <div
          className={`${style.card} ${style.leftCard} ${style.servicesText} ${rudaFont.className}`}
        >
          <p>vacuuming</p>
          <p>moping</p>
          <p>wall and door washing</p>
          <p>window cleaning</p>
          <p>carpet cleaning</p>
          <p>oven interior cleaning</p>
          <p>fridge interior cleaning</p>
          <p>anti-mould treatment</p>
          <p>floor disinfecting</p>
        </div>
        <div
          className={`${style.card}  ${style.servicesText} ${rudaFont.className} ${style.inCard}`}
        >
          in
        </div>

        <div
          className={`${style.card}  ${style.servicesText} ${rudaFont.className} ${style.rightCard}`}
        >
          <p>rooms</p>
          <p>kitchens</p>
          <p>bathrooms</p>
          <p>toilets</p>
          <p>balconies</p>
          <p>garages</p>
        </div>
      </div>
    </section>
  );
};
