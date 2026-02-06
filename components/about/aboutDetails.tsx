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
          <h2 className={style.subTitle}>Our Story</h2>
          <p>
            Originally from Hungary, I’ve been living in Gold Coast for over ten
            years. For the past eight years, I’ve been providing{" "}
            <b>professional home, office, and bond cleaning services</b>,
            gaining experience and the trust of many satisfied clients. Thanks
            to their support, our business has grown steadily over time.
          </p>

          <h2 className={style.subTitle}>Our Values</h2>
          <p>
            At Magic Andi Cleaning, we pride ourselves on delivering{" "}
            <b>high-quality cleaning services</b> tailored to your satisfaction.
            We use environmentally friendly products to ensure your space shines
            while helping preserve the planet. Our dedicated team is committed
            to reliability, professionalism, and customer satisfaction.
          </p>

          <h2 className={style.subTitle}>Meet the Owner</h2>
          <p>
            I’m Andrea K., the owner of Magic Andi Cleaning. Our clients trust
            us with their homes and businesses, and we work diligently to
            maintain that trust. Feel free to reach out — we promise you’ll be
            delighted with the results!
          </p>

          <p>
            <br />
            <br />
            <b>Andrea K.</b>
            <br />
            Owner, Magic Andi Cleaning
          </p>
        </div>
      </div>
    </section>
  );
};
