import DirectorCard from "../../../Components/Shared/DirectorCard";
import Footer from "../../../Components/Shared/Footer";
import { privateLessonTeacherData } from "../../SharedData/privateLessonFaculty";
import styles from "./WileyPrivateLessonFaculty.module.scss";

const WileyPrivateLessonFaculty = () => {
  return (
    <div className={styles.container}>
      <h1>Private Lesson Faculty</h1>
      <div className={styles.facultyContainer}>
        {privateLessonTeacherData
          .filter(({ wiley }) => {
            return wiley;
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

export default WileyPrivateLessonFaculty;
