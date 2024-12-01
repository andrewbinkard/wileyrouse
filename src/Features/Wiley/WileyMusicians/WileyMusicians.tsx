import { FC } from "react";
import { wileySections, wileyCandids } from "./const";
import MusiciansCard from "../../../Components/Shared/MusiciansCard";
import Footer from "../../../Components/Shared/Footer";
import ImageCarousel from "../../../Components/Shared/ImageCarousel";
import styles from "./WileyMusicians.module.scss";

const WileyMusicians: FC = () => {
  return (
    <div className={styles.container}>
      <h2>Musicians</h2>
      {wileySections.map(({ imgSrc, section, members }) => {
        return (
          <MusiciansCard
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
