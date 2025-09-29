import style from "./servicesDetails.module.css";
import { NextFont } from "next/dist/compiled/@next/font";
import Image from "next/image";
import { NextStep } from "./nextStep";

interface BondCleaningI {
  rubikGlitchFont: NextFont;
  rudaFont: NextFont;
}

export const BondCleaning = ({ rubikGlitchFont, rudaFont }: BondCleaningI) => {
  return (
    <section
      id="bondCleaning"
      className={`${style.container} ${rubikGlitchFont.className}`}
    >
      <div className={`${style.descriptionContainer}`}>
        <h1 className={style.descriptionTitle}>
          Bond clean or lease leaving clean
        </h1>
        <div className={style.decoration}></div>
        <div className={style.descriptionTextContainer}>
          <div className={`${rudaFont.className} ${style.descriptionText}`}>
            <div>
              <b>Moving out can be stressful enough </b>{" "}
              <p>
                Whether you’re off to a new rental or stepping into your very
                own home, the last thing you want is to spend hours scrubbing
                and worrying about your bond clean. Sure, it might feel strange
                to spend money just to get money back — but think of the time,
                the big effort, and stress you’ll save. The easiest way to
                secure your full bond refund? Hire a trusted cleaning team with
                the experience and reputation to get the job done right instead
                of you.{" "}
              </p>
              <p>
                <b>Why risk paying twice? </b>{" "}
                <p>
                  If you skip hiring a professional cleaning team and your
                  landlord or agent isn’t satisfied with the results, you’ll end
                  up needing to bring in another team for a touch-up clean —
                  which means extra cost and hassle.{" "}
                </p>
              </p>
            </div>
            <p>
              <NextStep />
            </p>
          </div>
          <div className={`${rudaFont.className} ${style.listContainer}`}>
            <b>Bond clean when end of your lease</b>
            <ul className={style.list}>
              <li>Cleaning and disinfecting of furniture surfaces, shelves</li>
              <li>Vacuuming and mopping floors</li>
              <li>
                Cleaning and disinfecting of bathrooms, toilets, showers, sinks,
                mirrors
              </li>
              <li>Mold removing from bathrooms, toilets, kitchen</li>
              <li>
                Cleaning and disinfecting of the kitchen counters and cabinets
                outside and inside
              </li>
              <li>Cleaning of the oven</li>
              <li>Cleaning of the fridge outside and inside</li>
              <li>Cleaning of balconies and balcony glasses</li>
              <li>Washing doors, door frames, skirting boards</li>
              <li>Cleaning and disinfecting of ceiling vents</li>
              <li>Washing the walls if necessary</li>
              <li>Cleaning of windows and tracks inside</li>
              <li>Cleaning windows outside where possible</li>
              <li>Cleaning of ribbon curtains, roller blinds</li>
              <li>Cleaning of carpets</li>
              <li>Cleaning of couches if necessary</li>
              <li>Cleaning of the garage if necessary</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`${style.imageContainer}`}>
        <div>
          <Image
            src="/drawings/girl.png"
            alt="Cleaning girl"
            width={90}
            height={200}
            priority
          />
        </div>
      </div>
    </section>
  );
};
