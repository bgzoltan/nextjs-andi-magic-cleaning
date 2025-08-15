import { rubikGlitchFont, rudaFont } from "@/app/layout";
import style from "./serviceDetails.module.css";

export const ServicesDetailsSection = () => {
  const servicesDetails = [
    {
      name: "Home cleaning",
      description: "We regularly clean your apartment or house.",
      button: "GET MORE",
      link: "",
    },
    {
      name: "Office cleaning",
      description:
        "We clean your office areas, from the reception, up to the common areas.",
      button: "GET MORE",
      link: "",
    },
    {
      name: "Bond cleaning",
      description: "We clean your rent after you leave it.",
      button: "GET MORE",
      link: "",
    },
  ];

  return (
    <section className={style.container}>
      <div className={`${style.sectionTitle} ${rubikGlitchFont.className}`}>Service types</div>

      <div className={`${style.cardsContainer} ${rudaFont.className}`}>
        {servicesDetails.map((service) => (
          <div className={style.card} key={service.name}>
            <div className={`${style.cardTitle} ${rubikGlitchFont.className}`}>
              {service.name}
            </div>
            <div className={style.cardText}>{service.description}</div>
            <div className={style.buttonContainer}>
              <button className={`primaryButton ${rudaFont.className}`}>
                {service.button}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
