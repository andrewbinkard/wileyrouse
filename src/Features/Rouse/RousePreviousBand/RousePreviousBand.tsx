import { FC } from "react";
import AboutProgramCard from "../../../Components/Shared/AboutProgramCard";
import { rousePreviousBandInfo } from "./const";
import Footer from "../../../Components/Shared/Footer";

const RousePreviousBand: FC = () => {
  const { programName, programInfo, imgSrc, roster } = rousePreviousBandInfo;
  return (
    <>
      <h1>Thank You!</h1>
      <AboutProgramCard
        programName={programName}
        programInfo={programInfo}
        imgSrc={imgSrc}
        roster={roster}
      />
      <Footer />
    </>
  );
};

export default RousePreviousBand;
