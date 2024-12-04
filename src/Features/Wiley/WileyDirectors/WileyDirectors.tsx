import { FC } from "react";
import { directorData } from "../../SharedData/directorData";
import DirectorCard from "../../../Components/Shared/DirectorCard";
import styles from "./WileyDirectors.module.scss";

const WileyDirectors: FC = () => {
  return (
    <div>
      <h2>CONDUCTORS</h2>
      <div className={styles.directorGrid}>
        {directorData
          .filter(({ wiley }) => {
            return wiley;
          })
          .map(({ name, title, imgSrc, wiley }, idx) => {
            return (
              <div className={styles.directorCard} key={idx}>
                <DirectorCard
                  name={name}
                  title={title}
                  imgSrc={imgSrc}
                  wiley={wiley}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default WileyDirectors;
