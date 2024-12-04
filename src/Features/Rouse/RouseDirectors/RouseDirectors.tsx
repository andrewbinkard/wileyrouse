import { FC } from "react";
import { directorData } from "../../SharedData/directorData";
import DirectorCard from "../../../Components/Shared/DirectorCard";
import styles from "./RouseDirectors.module.scss";

const RouseDirectors: FC = () => {
  return (
    <div>
      <h2>DIRECTORS & SOLOIST</h2>
      <div className={styles.directorGrid}>
        {directorData
          .filter(({ rouse }) => {
            return rouse;
          })
          .map(({ name, title, imgSrc, rouse }, idx) => {
            return (
              <div className={styles.directorCard} key={idx}>
                <DirectorCard
                  name={name}
                  title={title}
                  imgSrc={imgSrc}
                  rouse={rouse}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default RouseDirectors;
