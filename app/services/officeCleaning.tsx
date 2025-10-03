import style from "./servicesDetails.module.css";
import { NextFont } from "next/dist/compiled/@next/font";
import Image from "next/image";
import { NextStep } from "./nextStep";

interface OfficeCleaningI {
  rubikGlitchFont: NextFont;
  rudaFont: NextFont;
}

export const OfficeCleaning = ({
  rubikGlitchFont,
  rudaFont,
}: OfficeCleaningI) => {
  return (
    <section
      id="officeCleaning"
      className={`${style.container} ${rubikGlitchFont.className}`}
    >
      <h1 className={style.descriptionTitle}>Office cleaning</h1>
      <div className={style.decoration}>
        <div className={style.descriptionTextContainer}>
          <div className={`${style.imageContainer}`}>
            <div className={style.imageFrame}>
              <Image
                className={style.imageStyle}
                src="/images/office.webp"
                alt="Home kitchen"
                fill // the image expand to fill the parent
              />
            </div>
          </div>
          <div className={`${rudaFont.className} ${style.descriptionText}`}>
            <div>
              <b>A clean office makes a big difference. </b>
              <p>
                Our office cleaning service keeps your workplace fresh,
                hygienic, and welcoming for both your team and your clients.
                From daily upkeep like dusting, vacuuming, and sanitizing shared
                spaces to deeper cleaning when needed, we tailor our work to fit
                your schedule and office needs. The result? A brighter,
                healthier space where everyone can feel comfortable and focus on
                what matters most.
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
                fridge for just a flat add-on rate.
              </p>
            </div>
            <p>
              And if it’s been a while since your last professional clean or
              theres is a new season, our <b>Deep clean </b>option will get into
              all the nooks and crannies, leaving your whole office spotless and
              refreshed.
            </p>
            <p>
              <NextStep />
            </p>
          </div>
          <div className={`${rudaFont.className} ${style.listContainer}`}>
            <b>
              Standard regular or occasionall office cleaning for maintenance
            </b>
            <ul className={style.list}>
              <li>
                Office surfaces dusting & wiping (desks, chairs, shelves,
                cabinets, electronics)
              </li>
              <li>Office vacuuming and mopping floors</li>
              <li>
                Office shared areas cleaning (meeting rooms, reception, break
                rooms)
              </li>
              <li>
                High-touch office surface cleaning (door handles, switches,
                printers)
              </li>
              <li>
                Office Kitchen and Pantry Cleaning (countertops, sinks,
                appliances exterior)
              </li>
              <li>
                Office bathroom cleaning (toilets, sinks, mirrors, restocking
                supplies)
              </li>
              <li>Emptying bins and replacing liners of the office</li>
            </ul>
            <b>Add ons - occasionally</b>
            <ul className={style.list}>
              <li>Office oven and coffee machine cleaning</li>
              <li>Office fridge inside cleaning</li>
              <li>Office balcony cleaning</li>
              <li>office ceiling vents cleaning</li>
              <li>Office walls washing, skirting boards cleaning</li>
            </ul>
            <b>Deep clean items - seasonally or occasionally</b>
            <ul className={style.list}>
              <li>office windows and tracks cleaning</li>
              <li>Office workstation clean-ups (keyboards, monitors)</li>
              <li>Office carpet cleaning</li>
              <li>Office couch cleaning</li>
              <li>Office kitchen cabinets inside cleaning</li>
              <li>Mold removing from office bathrooms, toilets, kitchen</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
