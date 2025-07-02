import style from './welcome.module.css'
import { rubikGlitchFont, rudaFont } from "../../layout";

export const WelcomeSection = () => {
  return (
    <section className={`${style.container} ${rubikGlitchFont.className}`}>
      <h1 className={style.title}>Welcome to my cleaning services</h1>
      <div className={style.decoration}></div>
      <p className={`${rudaFont.className} ${style.welcomeText}`}>
        With my reliable, permanent team, I offer you a professional service for <b>regular cleaning of your home, regular cleaning of offices or one-off cleaning after vacating a rental property (bond cleaning)</b>.</p> 
        <p className={`${rudaFont.className} ${style.welcomeText}`}>I guarantee that you will be satisfied with our high quality work and get a truly clean environment from us. I can provide my services to you in <b>Surfers Paradise, Southport, Main Beach, Broad Beach, Bundall, Mermaid </b>areas.
      </p>
    </section>
  );
};
