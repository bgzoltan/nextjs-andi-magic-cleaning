import style from "./servicesDetails.module.css";
import { NextFont } from "next/dist/compiled/@next/font";
import Image from "next/image";
import { NextStep } from "./nextStep";

interface HomeCleaningI {
  rubikGlitchFont: NextFont;
  rudaFont: NextFont;
}

export const HomeCleaning = ({ rubikGlitchFont, rudaFont }: HomeCleaningI) => {
  return (
    <section
      id="homeCleaning"
      className={`${style.container} ${rubikGlitchFont.className}`}
    >
      <h1 className={style.descriptionTitle}>Home cleaning</h1>
      <div className={style.decoration}>
        <div className={style.descriptionTextContainer}>
          <div className={`${rudaFont.className} ${style.descriptionText}`}>
            <div>
              <b>Ready for your home to feel almost brand new? </b>
              <p>
                Our Full Home Cleaning package gives you a thorough clean at
                reasonable price. If you are thinking of a regular cleaning our
                professional team works through every room using our detailed
                checklist — so nothing gets missed.{" "}
              </p>
              <p>
                <b>Are reliability and a friendly attitude </b> important to
                you? Then our team is perfect for you.
              </p>
            </div>
            <div>
              <b>Want to go further? </b>
              <p>
                Add extras like oven cleaning, sparkling windows, or a fresh
                fridge for just a flat add-on rate.{" "}
              </p>
            </div>
            <p>
              And if it’s been a while since your last professional clean or
              theres is a new season, our <b>Deep clean </b>option will get into
              all the nooks and crannies, leaving your whole home spotless and
              refreshed.
            </p>
            <p>
              <NextStep />
            </p>
          </div>

          <div className={`${rudaFont.className} ${style.listContainer}`}>
            <b>Standard regular or occasionall clean for maintenance</b>
            <ul className={style.list}>
              <li>Dusting surfaces, furniture, shelves</li>
              <li>Vacuuming and mopping floors</li>
              <li>Cleaning bathrooms, toilets, showers, sinks, mirrors</li>
              <li>Cleaning the kitchen counters and cabinets outside</li>
              <li>Emptying bins</li>
            </ul>
            <b>Add ons - occasionally</b>
            <ul className={style.list}>
              <li>Cleaning the oven</li>
              <li>Cleaning the fridge inside</li>
              <li>Cleaning the Balcony</li>
              <li>Washing doors, door frames, skirting boards</li>
              <li>Cleaning ceiling vents</li>
              <li>Cleaning the walls</li>
            </ul>
            <b>Deep clean items - seasonally or occasionally</b>
            <ul className={style.list}>
              <li>Cleaning windows and tracks inside</li>
              <li>Cleaning windows outside where possible</li>
              <li>Carpet cleaning</li>
              <li>Couch cleaning</li>
              <li>Cleaning kitchen cabinets inside</li>
              <li>Mold removing from bathrooms, toilets, kitchen</li>
            </ul>
          </div>

          <div className={`${style.imageContainer}`}>
            <div className={style.imageFrame}>
              <Image
                className={style.imageStyle}
                src="/images/homekitchen.webp"
                alt="Home kitchen"
                fill // the image expand to fill the parent
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
