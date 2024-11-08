// src/routes.tsx
import { RouteObject } from "react-router-dom";
import Wiley from "./Wiley";
import Rouse from "./Rouse";
import WileyAcknowledgements from "./Wiley/WileyAcknowledgements";
import WileyPrivateLessonFaculty from "./Wiley/WileyPrivateLessonFaculty";
import WileyLettersOfRecognition from "./Wiley/WileyLettersOfRecognition";

// Define routes as an array of RouteObjects
const routes: RouteObject[] = [
  {
    path: "/wiley",
    element: <Wiley />,
    children: [
      {
        path: "acknowledgements",
        element: <WileyAcknowledgements />,
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
  },
];

export default routes;
