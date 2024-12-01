// src/routes.tsx
import { RouteObject } from "react-router-dom";
import Wiley from "../Features/Wiley";
import Rouse from "../Features/Rouse";
import WileyAcknowledgements from "../Features/Wiley/WileyAcknowledgements";
import WileyPrivateLessonFaculty from "../Features/Wiley/WileyPrivateLessonFaculty";
import WileyLettersOfRecognition from "../Features/Wiley/WileyLettersOfRecognition";
import RouseAcknowledgements from "../Features/Rouse/RouseAcknowledgements";
import RouseLettersOfRecognition from "../Features/Rouse/RouseLettersOfRecognition";
import RousePrivateLessonFaculty from "../Features/Rouse/RousePrivateLessonFaculty";
import WileyComposers from "../Features/Wiley/WileyComposers";
import WileyBios from "../Features/Wiley/WileyBios";
import WileyMusicians from "../Features/Wiley/WileyMusicians";
import WileyAboutProgram from "../Features/Wiley/WileyAboutProgram/WileyAboutProgram";

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
    ],
  },
  {
    path: "/rouse",
    element: <Rouse />,
    children: [
      {
        path: "acknowledgements",
        element: <RouseAcknowledgements />,
      },
      {
        path: "letters-of-recognition",
        element: <RouseLettersOfRecognition />,
      },
      {
        path: "private-lesson-faculty",
        element: <RousePrivateLessonFaculty />,
      },
    ],
  },
];

export default routes;
