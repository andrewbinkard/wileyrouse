import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Wiley from "./Features/Wiley";
import WileyAcknowledgements from "./Features/Wiley/WileyAcknowledgements";
import WileyPrivateLessonFaculty from "./Features/Wiley//WileyPrivateLessonFaculty";
import WileyLettersOfRecognition from "./Features/Wiley/WileyLettersOfRecognition";
import Rouse from "./Features/Rouse"; // Assuming a separate component for Rouse
import RouseAcknowledgements from "./Features/Rouse/RouseAcknowledgements";
import RousePrivateLessonFaculty from "./Features/Rouse/RousePrivateLessonFaculty";
import RouseLettersOfRecognition from "./Features/Rouse/RouseLettersOfRecognition";

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="wiley" element={<Wiley />}>
        <Route path="acknowledgements" element={<WileyAcknowledgements />} />
        <Route
          path="private-lesson-faculty"
          element={<WileyPrivateLessonFaculty />}
        />
        <Route
          path="letters-of-recommendation"
          element={<WileyLettersOfRecognition />}
        />
      </Route>
      <Route path="rouse" element={<Rouse />} />
      <Route path="acknowledgements" element={<RouseAcknowledgements />} />
      <Route
        path="private-lesson-faculty"
        element={<RousePrivateLessonFaculty />}
      />
      <Route
        path="letters-of-recommendation"
        element={<RouseLettersOfRecognition />}
      />
    </Routes>
  );
};

export default App;
