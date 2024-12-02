import { FC } from "react";
import AboutProgramCard from "../../../Components/Shared/AboutProgramCard";
import { wileyPreviousBandInfo } from "./const";
import Footer from "../../../Components/Shared/Footer";

const WileyPreviousBand: FC = () => {
  const { programName, programInfo, imgSrc, roster } = wileyPreviousBandInfo;
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

export default WileyPreviousBand;
