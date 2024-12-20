import { FC } from "react";
import AboutProgramCard from "../../../Components/Shared/AboutProgramCard";
import { wileyAboutProgramInfo } from "./const";
import Footer from "../../../Components/Shared/Footer";
import styles from "./WileyAboutProgram.module.scss";

const WileyAboutProgram: FC = () => {
  return (
    <>
      {wileyAboutProgramInfo.map(
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
