import { rubikGlitchFont, rudaFont } from "@/app/layout";
import style from "./serviceDetails.module.css";

export const ServicesDetailsSection = () => {
  const servicesDetails = [
    {
      name: "Home cleaning",
      description: "We regularly clean your apartment or house.",
      button: "Get more...",
      link: "",
    },
    {
      name: "Office cleaning",
      description:
        "We clean your office areas, from the reception, up to the common areas.",
      button: "Get more...",
      link: "",
    },
    {
      name: "Bond cleaning",
      description: "We clean your rent after you leave it.",
      button: "Get more...",
      link: "",
    },
  ];

  return (
    <section className={`${style.container} ${rudaFont.className}`}>
      {servicesDetails.map((service) => (
        <div className={style.subContainer} key={service.name}>
          <div className={`${style.title} ${rubikGlitchFont.className}`}>
            {service.name}
          </div>
          <div className={style.descriptionText}>{service.description}</div>
          <div className={style.buttonContainer}>
            <button className={`primaryButton ${rudaFont.className}`}>
              {service.button}
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};
