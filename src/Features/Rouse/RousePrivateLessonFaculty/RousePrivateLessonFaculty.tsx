import { FC } from "react";
import DirectorCard from "../../../Components/Shared/DirectorCard";
import Footer from "../../../Components/Shared/Footer";
import { privateLessonTeacherData } from "../../SharedData/privateLessonFacultyData";
import styles from "./RousePrivateLessonFaculty.module.scss";

const RousePrivateLessonFaculty: FC = () => {
  return (
    <div className={styles.container}>
      <h1>Private Lesson Faculty</h1>
      <div className={styles.facultyContainer}>
        {privateLessonTeacherData
          .filter(({ rouse }) => {
            return rouse;
          })
          .map(({ name, instrument, imgSrc, bio }, idx) => {
            return (
              <DirectorCard
                key={idx}
                name={name}
                instrument={instrument}
                imgSrc={imgSrc}
                bio={bio}
              />
            );
          })}
      </div>
      <Footer />
    </div>
  );
};

export default RousePrivateLessonFaculty;
