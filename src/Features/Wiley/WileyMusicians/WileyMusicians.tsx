import { FC } from "react";
import { wileySections, wileyCandids } from "../../SharedData/musicianData";
import MusiciansCard from "../../../Components/Shared/MusiciansCard";
import Footer from "../../../Components/Shared/Footer";
import ImageCarousel from "../../../Components/Shared/ImageCarousel";
import styles from "./WileyMusicians.module.scss";

const WileyMusicians: FC = () => {
  return (
    <div className={styles.container}>
      <h1>MUSICIANS</h1>
      <h4>Names listed Left to Right</h4>
      {wileySections.map(({ imgSrc, section, members }, idx) => {
        return (
          <MusiciansCard
            key={idx}
            imgSrc={imgSrc}
            sectionName={section}
            sectionMembers={members}
          />
        );
      })}
      <ImageCarousel imgData={wileyCandids} />

      <Footer />
    </div>
  );
};

export default WileyMusicians;
