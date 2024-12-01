import { FC } from "react";
import AboutProgramCard from "../../../Components/Shared/AboutProgramCard";
import { wileyAboutProgramInfo } from "./const";

const WileyAboutProgram: FC = () => {
  const { programName, programInfo, imgSrc } = wileyAboutProgramInfo;
  return (
    <AboutProgramCard
      programName={programName}
      programInfo={programInfo}
      imgSrc={imgSrc}
    />
  );
};

export default WileyAboutProgram;
