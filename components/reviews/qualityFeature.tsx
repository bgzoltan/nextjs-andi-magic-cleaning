"use client";
import { useState } from "react";
import { FiMinusSquare, FiPlusSquare } from "react-icons/fi";
import style from "./qualityFeature.module.css";

interface QualityFeatureI {
  feature: string;
}

export const QualityFeature = () => {
  const [isModalOpen, setIsModelOpen] = useState(false);

  const qualityFeatures = {
    "High quality":
      "Our customers love the thoroughness of our cleaning team, often praising their attention to detail and the fact that we leave homes spotlessly clean.",
    "Professional stuff":
      "Our customers consistently describe our cleaners as friendly, punctual, and respectful — making them feel comfortable and confident in our service.",
    Realibility:
      "Our team was praised for its reliable scheduling and clear communication.",
    "Value For Money":
      "Many customers say our service offers great value — the quality of our cleaning and the professionalism of our staff make every visit worth the cost.",
    "": "",
  };

  type FeatureKeys = keyof typeof qualityFeatures;
  const [selectedFeature, setSelectedFeature] = useState<FeatureKeys>("");

  const handleModalOpen = (feature: FeatureKeys) => {
    setSelectedFeature(feature);
    setIsModelOpen(isModalOpen ? false : true);
  };
  return (
    <>
      {isModalOpen ? (
        <>
          <div className={style.iconContainer}>
            {Object.keys(qualityFeatures).map(
              (feature) =>
                feature != "" && (
                  <div className={style.badgeContainer} key={feature}>
                    {feature == selectedFeature ? (
                      <>
                        <FiMinusSquare
                          className={style.iconPlusMinus}
                          size={30}
                          onClick={() => handleModalOpen("")}
                        />
                        <b> {feature}</b>
                      </>
                    ) : (
                      <>
                        <FiPlusSquare
                          className={style.iconPlusMinus}
                          size={30}
                          onClick={() =>
                            handleModalOpen(feature as FeatureKeys)
                          }
                        />
                        {feature}
                      </>
                    )}
                  </div>
                )
            )}
          </div>
          <div className={style.featureContainer}>
            {qualityFeatures[selectedFeature]}
          </div>
        </>
      ) : (
        <div className={style.iconContainer}>
          <div className={style.iconContainer}>
            {Object.keys(qualityFeatures).map(
              (feature) =>
                feature != "" && (
                  <div className={style.badgeContainer} key={feature}>
                    <FiPlusSquare
                      className={style.iconPlusMinus}
                      size={30}
                      onClick={() => handleModalOpen(feature as FeatureKeys)}
                    />
                    <>{feature}</>
                  </div>
                )
            )}
          </div>
        </div>
      )}
    </>
  );
};
