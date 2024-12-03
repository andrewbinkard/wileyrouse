import DirectorCard from "../../../Components/Shared/DirectorCard";
import Footer from "../../../Components/Shared/Footer";
import { privateLessonTeacherData } from "./const";
import styles from "./WileyPrivateLessonFaculty.module.scss";

const WileyPrivateLessonFaculty = () => {
  return (
    <div className={styles.container}>
      <h1>Private Lesson Faculty</h1>
      <div className={styles.facultyContainer}>
        {privateLessonTeacherData.map(({ name, instrument, imgSrc }, idx) => {
          return (
            <DirectorCard
              key={idx}
              name={name}
              instrument={instrument}
              imgSrc={imgSrc}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default WileyPrivateLessonFaculty;
