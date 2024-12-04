import { LetterOfRecCardProps } from "../../Components/Shared/LetterOfRecCard/types";

// ROUSE
import DholakiaHeadshot from "../../assets/images/RouseLettersOfRec/Dholakia_Photo.jpg";
import GearingHeadshot from "../../assets/images/RouseLettersOfRec/Gearing_Photo.jpg";
import HawkinsHeadshot from "../../assets/images/RouseLettersOfRec/Hawkins_Photo.jpg";
import HowardHeadshot from "../../assets/images/RouseLettersOfRec/Howard_Photo.jpg";

import DholakiaLetter from "../../assets/images/RouseLettersOfRec/Dholakia_Letter.jpg";
import GearingLetter from "../../assets/images/RouseLettersOfRec/Gearing_Letter.jpg";
import HawkinsLetter from "../../assets/images/RouseLettersOfRec/Hawkins_Letter.jpg";
import HowardLetter from "../../assets/images/RouseLettersOfRec/Howard_Letter.jpg";

// WILEY

export const rouseLettersOfRecData: LetterOfRecCardProps[] = [
  {
    name: "Gloria Gonzales-Dholakia, Ph.D.",
    title: "Board of Trustees President",
    headshotSrc: DholakiaHeadshot,
    letterSrc: DholakiaLetter,
  },
  {
    name: "Bruce Gearing, Ed.D.",
    title: "Superintendent",
    headshotSrc: GearingHeadshot,
    letterSrc: GearingLetter,
  },
  {
    name: "Vincent Hawkins",
    title: "Principal",
    headshotSrc: HawkinsHeadshot,
    letterSrc: HawkinsLetter,
  },
  {
    name: "Mike Howard",
    title: "Director of Fine Arts - Music and Performing Arts",
    headshotSrc: HowardHeadshot,
    letterSrc: HowardLetter,
  },
];
