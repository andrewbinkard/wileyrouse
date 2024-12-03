import { FC } from "react";
import { wileyLettersOfRecData } from "./const";
import LetterOfRecCard from "../../../Components/Shared/LetterOfRecCard";

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
    </div>
  );
};

export default WileyLettersOfRecognition;
