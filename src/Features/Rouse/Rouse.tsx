import { FC } from "react";
import { Link, Routes, Route } from "react-router-dom";
import RouseAcknowledgements from "./RouseAcknowledgements";
import RousePrivateLessonFaculty from "./RousePrivateLessonFaculty";
import CandidCarousel from "../../Components/Shared/ImageCarousel";
import styles from "./Rouse.module.scss";

const Wiley: FC = () => {
  return (
    <div className={styles.container}>
      <h2>Rouse House</h2>

      {/* Navigation Links for Wiley's subpages */}

      <Link to="acknowledgements">Acknowledgements</Link>
      <Link to="private-lesson-faculty">Private Lesson Faculty</Link>

      {/* Routes for Wiley's subpages */}
      <Routes>
        <Route path="acknowledgements" element={<RouseAcknowledgements />} />
        <Route
          path="private-lesson-faculty"
          element={<RousePrivateLessonFaculty />}
        />
      </Routes>

      <CandidCarousel />
    </div>
  );
};

export default Wiley;
