import { FC } from "react";
import { wileyLettersOfRecData } from "../../SharedData/lettersOfRecData";
import LetterOfRecCard from "../../../Components/Shared/LetterOfRecCard";
import Footer from "../../../Components/Shared/Footer";

const WileyLettersOfRecognition: FC = () => {
  return (
    <div>
      <h1>Letters Of Recognition</h1>
      {wileyLettersOfRecData.map(({ name, title, headshotSrc, letterSrc }) => {
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
