import { FC } from "react";
import { rouseSections, rouseCandids } from "../../SharedData/musicianData";
import MusiciansCard from "../../../Components/Shared/MusiciansCard";
import Footer from "../../../Components/Shared/Footer";
import ImageCarousel from "../../../Components/Shared/ImageCarousel";
import styles from "./RouseMusicians.module.scss";

const RouseMusicians: FC = () => {
  return (
    <div className={styles.container}>
      <h1>MUSICIANS</h1>
      <h4>Names listed Left to Right</h4>
      {rouseSections.map(({ imgSrc, section, members }, idx) => {
        return (
          <MusiciansCard
            key={idx}
            imgSrc={imgSrc}
            sectionName={section}
            sectionMembers={members}
          />
        );
      })}
      <ImageCarousel imgData={rouseCandids} />

      <Footer />
    </div>
  );
};

export default RouseMusicians;
