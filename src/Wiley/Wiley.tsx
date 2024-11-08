import { FC } from "react";
import { Link, Routes, Route } from "react-router-dom";
import WileyAcknowledgements from "./WileyAcknowledgements";
import WileyPrivateLessonFaculty from "./WileyPrivateLessonFaculty";
import CandidCarousel from "../Components/CandidCarousel";

const Wiley: FC = () => {
  return (
    <div>
      <h2>Wiley Page</h2>

      {/* Navigation Links for Wiley's subpages */}
      <nav>
        <Link to="acknowledgements">Acknowledgements</Link>
        <Link to="private-lesson-faculty">Private Lesson Faculty</Link>
      </nav>

      {/* Routes for Wiley's subpages */}
      <Routes>
        <Route path="acknowledgements" element={<WileyAcknowledgements />} />
        <Route
          path="private-lesson-faculty"
          element={<WileyPrivateLessonFaculty />}
        />
      </Routes>

      <CandidCarousel />
    </div>
  );
};

export default Wiley;
