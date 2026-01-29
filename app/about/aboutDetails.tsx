import style from "./aboutDetails.module.css";
import { NextFont } from "next/dist/compiled/@next/font";
import Image from "next/image";

interface AboutDetailsI {
  rubikGlitchFont: NextFont;
  rudaFont: NextFont;
}

export const AboutDetails = ({ rubikGlitchFont, rudaFont }: AboutDetailsI) => {
  return (
    <section
      id="aboutUs"
      className={`${style.container} ${rubikGlitchFont.className}`}
    >
      <div className={style.descriptionContainer}>
        <div className={`${style.imageContainer}`}>
          <div className={style.imageFrame}>
            <Image
              className={style.imageStyle}
              src="/images/about.webp"
              alt="About us image"
              fill
            />
          </div>
        </div>
        <div className={`${rudaFont.className} ${style.description}`}>
          <p>
            Originally from Hungary, I’ve been living in this beautiful country
            for over ten years. For the past eight years, I’ve been providing
            professional cleaning services, gaining experience and the trust of
            many satisfied clients. Over time, my business has grown thanks to
            their support. I’m proud of what we’ve accomplished so far, and my
            dedicated team shares in this pride. Of course, our success is made
            possible by our clients, who trust us with their homes and
            businesses, and allow us to care for their valuable spaces. <br />
            Our experience guarantees thorough, high-quality cleaning, tailored
            to your satisfaction. We use environmentally friendly products, so
            while your property shines, we also help preserve the natural beauty
            of our planet for future generations.
            <br />
            <br />
            Feel free to reach out—trust us, and we promise you’ll be delighted
            with the results!
            <br />
            <br />
            <b>Andrea K. Owner</b>
            <br />
            Andi Magic Cleaning
            <br />
            <br />
          </p>
        </div>
      </div>
    </section>
  );
};
