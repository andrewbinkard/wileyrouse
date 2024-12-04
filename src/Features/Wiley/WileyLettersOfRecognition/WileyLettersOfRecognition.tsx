import { FC } from "react";
import { rouseLettersOfRecData } from "../../SharedData/lettersOfRecData";
import LetterOfRecCard from "../../../Components/Shared/LetterOfRecCard";
import Footer from "../../../Components/Shared/Footer";

const WileyLettersOfRecognition: FC = () => {
  return (
    <div>
      <h1>Letters Of Recognition</h1>
      {rouseLettersOfRecData.map(({ name, title, headshotSrc, letterSrc }) => {
        return (
          <LetterOfRecCard
            name={name}
            title={title}
            headshotSrc={headshotSrc}
            letterSrc={letterSrc}
          />
        );
      })}
      <Footer />
    </div>
  );
};

export default WileyLettersOfRecognition;
