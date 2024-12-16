import { LetterOfRecCardProps } from "../../Components/Shared/LetterOfRecCard/types";

// ROUSE
import DholakiaHeadshot from "../../assets/images/RouseLettersOfRec/Dholakia_Photo.jpg";
import GearingHeadshot from "../../assets/images/RouseLettersOfRec/Gearing_Photo.jpg";
import HawkinsHeadshot from "../../assets/images/RouseLettersOfRec/Hawkins_Photo.jpg";
import HowardHeadshot from "../../assets/images/RouseLettersOfRec/Howard_Photo.jpg";

import DholakiaRouseLetter from "../../assets/images/RouseLettersOfRec/Dholakia_Letter.jpg";
import GearingRouseLetter from "../../assets/images/RouseLettersOfRec/Gearing_Letter.jpg";
import HawkinsRouseLetter from "../../assets/images/RouseLettersOfRec/Hawkins_Letter.jpg";
import HowardRouseLetter from "../../assets/images/RouseLettersOfRec/Howard_Letter.jpg";

// WILEY
import HowardWileyLetter from "../../assets/images/WileyLettersOfRec/HowardWileyLetter.jpg";
import GearingWileyLetter from "../../assets/images/WileyLettersOfRec/GearingWileyLetter.jpg";
import DarlaHeadshot from "../../assets/images/WileyLettersOfRec/DarlaHeadshot.png";
import DarlaLetter from "../../assets/images/WileyLettersOfRec/DarlaWileyLetter.jpg";

export const wileyLettersOfRecData: LetterOfRecCardProps[] = [
  {
    name: "Bruce Gearing, Ed.D.",
    title: "Superintendent",
    headshotSrc: GearingHeadshot,
    letterSrc: GearingWileyLetter,
  },
  {
    name: "Mike Howard",
    title: "Director of Fine Arts - Music and Performing Arts",
    headshotSrc: HowardHeadshot,
    letterSrc: HowardWileyLetter,
  },
  {
    name: "Darla Smith",
    title: "Principal - Wiley Middle School",
    headshotSrc: DarlaHeadshot,
    letterSrc: DarlaLetter,
  },
];

export const rouseLettersOfRecData: LetterOfRecCardProps[] = [
  {
    name: "Gloria Gonzales-Dholakia, Ph.D.",
    title: "Board of Trustees President",
    headshotSrc: DholakiaHeadshot,
    letterSrc: DholakiaRouseLetter,
  },
  {
    name: "Bruce Gearing, Ed.D.",
    title: "Superintendent",
    headshotSrc: GearingHeadshot,
    letterSrc: GearingRouseLetter,
  },
  {
    name: "Vincent Hawkins",
    title: "Principal",
    headshotSrc: HawkinsHeadshot,
    letterSrc: HawkinsRouseLetter,
  },
  {
    name: "Mike Howard",
    title: "Director of Fine Arts - Music and Performing Arts",
    headshotSrc: HowardHeadshot,
    letterSrc: HowardRouseLetter,
  },
];
