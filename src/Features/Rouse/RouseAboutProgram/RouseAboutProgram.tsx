import { FC } from "react";
import AboutProgramCard from "../../../Components/Shared/AboutProgramCard";
import { rouseAboutProgramInfo } from "./const";
import Footer from "../../../Components/Shared/Footer";
import styles from "./RouseAboutProgram.module.scss";

const WileyAboutProgram: FC = () => {
  return (
    <>
      {rouseAboutProgramInfo.map(
        ({ programName, programInfo, imgSrc }, idx) => {
          return (
            <div className={styles.cardContainer} key={idx}>
              <AboutProgramCard
                programName={programName}
                programInfo={programInfo}
                imgSrc={imgSrc}
              />
            </div>
          );
        }
      )}
      <Footer />
    </>
  );
};

export default WileyAboutProgram;