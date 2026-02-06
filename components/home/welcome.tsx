import style from "./welcome.module.css";
import { rubikGlitchFont, rudaFont } from "../../app/layout";

export const WelcomeSection = () => {
  return (
    <section className={`${style.container} ${rubikGlitchFont.className}`}>
      <div className={style.textContainer}>
        <h1 className={style.sectionTitle}>
          Cleaning services in the Gold Coast
        </h1>
        <p className={`${rudaFont.className} ${style.welcomeText}`}>
          With my reliable, permanent team, I offer you a professional service
          for{" "}
          <b>
            regular cleaning of your home, regular cleaning of offices or
            one-off cleaning after vacating a rental property (bond cleaning).
          </b>
        </p>
        <p className={`${rudaFont.className} ${style.welcomeText}`}>
          I guarantee that you will be satisfied with our high quality work and
          get a truly clean environment from us. I can provide my services to
          you in{" "}
          <b>
            Surfers Paradise, Southport, Main Beach, Broad Beach, Bundall,
            Mermaid{" "}
          </b>
          areas.
        </p>
      </div>
      <div className={style.imageContainer}></div>
    </section>
  );
};
