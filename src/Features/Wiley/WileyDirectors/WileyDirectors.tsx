import { FC } from "react";
import { wileyDirectorData } from "./const";
import DirectorCard from "../../../Components/Shared/DirectorCard";
import styles from "./WileyDirectors.module.scss";

const WileyDirectors: FC = () => {
  return (
    <div>
      <h2>Directors</h2>
      <div className={styles.directorGrid}>
        {wileyDirectorData.map(({ name, title, imgSrc }) => {
          return (
            <div className={styles.directorCard}>
              <DirectorCard name={name} title={title} imgSrc={imgSrc} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WileyDirectors;
