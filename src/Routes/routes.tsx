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

// Define routes as an array of RouteObjects
export const routes: RouteObject[] = [
  {
    path: "/wiley",
    element: <Wiley />,
    children: [
      {
        path: "acknowledgements",
        element: <WileyAcknowledgements />,
      },
      {
        path: "wiley-composers",
        element: <WileyComposers />,
      },

      {
        path: "letters-of-recognition",
        element: <WileyLettersOfRecognition />,
      },
      {
        path: "private-lesson-faculty",
        element: <WileyPrivateLessonFaculty />,
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
