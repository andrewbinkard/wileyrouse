// src/routes.tsx
import { RouteObject } from "react-router-dom";
import Wiley from "../Features/Wiley";
import WileyAcknowledgements from "../Features/Wiley/WileyAcknowledgements";
import WileyPrivateLessonFaculty from "../Features/Wiley/WileyPrivateLessonFaculty";
import WileyLettersOfRecognition from "../Features/Wiley/WileyLettersOfRecognition";
import WileyComposers from "../Features/Wiley/WileyComposers";
import WileyBios from "../Features/Wiley/WileyBios";
import WileyMusicians from "../Features/Wiley/WileyMusicians";
import WileyAboutProgram from "../Features/Wiley/WileyAboutProgram/WileyAboutProgram";
import WileyPreviousBand from "../Features/Wiley/WileyPreviousBand";

import Rouse from "../Features/Rouse";
import RouseAcknowledgements from "../Features/Rouse/RouseAcknowledgements";
import RousePrivateLessonFaculty from "../Features/Rouse/RousePrivateLessonFaculty";
import RouseLettersOfRecognition from "../Features/Rouse/RouseLettersOfRecognition";
import RouseComposers from "../Features/Rouse/RouseComposers";
import RouseBios from "../Features/Rouse/RouseBios";
import RouseMusicians from "../Features/Rouse/RouseMusicians";
import RouseAboutProgram from "../Features/Rouse/RouseAboutProgram";
import RousePreviousBand from "../Features/Rouse/RousePreviousBand";

// Define routes as an array of RouteObjects
export const routes: RouteObject[] = [
  {
    path: "/wiley",
    element: <Wiley />,
    children: [
      {
        path: "wiley-acknowledgements",
        element: <WileyAcknowledgements />,
      },
      {
        path: "wiley-composers",
        element: <WileyComposers />,
      },
      {
        path: "wiley-musicians",
        element: <WileyMusicians />,
      },
      {
        path: "wiley-letters-of-recognition",
        element: <WileyLettersOfRecognition />,
      },
      {
        path: "wiley-private-lesson-faculty",
        element: <WileyPrivateLessonFaculty />,
      },
      {
        path: "wiley-bios",
        element: <WileyBios />,
      },
      {
        path: "wiley-bios/:directorName",
        element: <WileyBios />,
      },
      {
        path: "wiley-about-program",
        element: <WileyAboutProgram />,
      },
      {
        path: "wiley-previous-band",
        element: <WileyPreviousBand />,
      },
    ],
  },
  {
    path: "/rouse",
    element: <Rouse />,
    children: [
      {
        path: "rouse-acknowledgements",
        element: <RouseAcknowledgements />,
      },
      {
        path: "rouse-composers",
        element: <RouseComposers />,
      },
      {
        path: "rouse-musicians",
        element: <RouseMusicians />,
      },
      {
        path: "rouse-letters-of-recognition",
        element: <RouseLettersOfRecognition />,
      },
      {
        path: "rouse-private-lesson-faculty",
        element: <RousePrivateLessonFaculty />,
      },
      {
        path: "rouse-bios",
        element: <RouseBios />,
      },
      {
        path: "rouse-bios/:directorName",
        element: <RouseBios />,
      },
      {
        path: "rouse-about-program",
        element: <RouseAboutProgram />,
      },
      {
        path: "rouse-previous-band",
        element: <RousePreviousBand />,
      },
    ],
  },
];

export default routes;
