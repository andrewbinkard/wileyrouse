import { FC } from "react";
import styles from "./AboutProgramCard.module.scss";
import { AboutProgramCardProps } from "./types";

const AboutProgramCard: FC<AboutProgramCardProps> = ({
  programInfo,
  imgSrc,
  programName,
}) => {
  return (
    <div className={styles.cardContainer}>
      <h1 className={styles.cardTitle}>{programName}</h1>
      <img
        className={styles.cardImage}
        src={imgSrc}
        alt={`Image of ${programName}`}
      />
      <p className={styles.cardText}>{programInfo}</p>
    </div>
  );
};

export default AboutProgramCard;
