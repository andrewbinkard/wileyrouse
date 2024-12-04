import { FC } from "react";
import { lettersOfRecData } from "../../SharedData/lettersOfRecData";
import LetterOfRecCard from "../../../Components/Shared/LetterOfRecCard";
import Footer from "../../../Components/Shared/Footer";

const RouseLettersOfRecognition: FC = () => {
  return (
    <div>
      <h1>Letters Of Recognition</h1>
      {lettersOfRecData
        .filter(({ rouse }) => {
          return rouse;
        })
        .map(({ name, title, headshotSrc, letterSrc }) => {
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

export default RouseLettersOfRecognition;
