import { SchoolCardWithRoute } from "../Components/Shared/SchoolCard/types";
import rouseLogo from "../assets/images/RHS_r_Logo_300_ppi.png";
import wileyLogo from "../assets/images/WileyLogo.png";

export const performingSchoolData: SchoolCardWithRoute[] = [
  {
    schoolName: "Rouse High School",
    ensembleName: "Honor Band",
    imgSrc: rouseLogo,
    performanceDetails: "3:00PM | Thursday, 12/19 | 375AB",
    route: "/rouse",
  },
  {
    route: "/wiley",
    schoolName: "Wiley Middle School",
    ensembleName: "Wind Ensemble",
    imgSrc: wileyLogo,
    performanceDetails: "8:30AM | Friday, 12/20 | 375E",
  },
];
