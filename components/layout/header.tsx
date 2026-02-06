import Image from "next/image";
import style from "./header.module.css";
import { FiPhone } from "react-icons/fi";
import { rubikGlitchFont } from "../../app/layout";
import { Navigation } from "./navigation";
import { MobileNavigation } from "./mobileNavigation";

export const Header = () => {
  return (
    <>
      <section className={style.largeScreen}>
        <div className={style.container}>
          <div className={style.horizontalContainer}>
            <Image
              src="/drawings/girl.png"
              alt="Cleaning girl"
              width={90}
              height={200}
              priority
            />
          </div>
          <div
            className={`${style.verticalContainer} ${rubikGlitchFont.className}`}
          >
            <div className={style.title}>Andi Magic Cleaning</div>
            <div className={style.subTitle}>Gold Coast</div>
          </div>
          <div className={style.horizontalContainer}>
            <div className={`${style.phone} ${rubikGlitchFont.className}`}>
              <div className={style.phoneIcon}>
                <FiPhone size={24} />
              </div>
              +61-481-764-xxx
            </div>
            <Navigation />
          </div>
        </div>
      </section>

      <section className={style.mobileScreen}>
        <div className={style.container}>
          <div className={style.horizontalContainer}>
            <Image
              src="/drawings/girl.png"
              alt="Cleaning girl"
              width={45}
              height={100}
              priority
            />
          </div>
          <div
            className={`${style.verticalContainer} ${rubikGlitchFont.className}`}
          >
            <div className={style.title}>Andi Magic Cleaning</div>
            <div className={style.subTitle}>Gold Coast</div>
            <div className={`${style.phone} ${rubikGlitchFont.className}`}>
              +61-481-764-707
            </div>
          </div>
          <MobileNavigation />
        </div>
      </section>
    </>
  );
};
