import { FC } from "react";
import styles from "./AboutProgramCard.module.scss";
import { AboutProgramCardProps } from "./types";

const AboutProgramCard: FC<AboutProgramCardProps> = ({
  programInfo,
  imgSrc,
  programName,
  roster,
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
      <br />
      {roster && (
        <>
          <h2>{`${programName} Members`}</h2>
          <div className={styles.rosterContainer}>
            {roster.map((name, index) => (
              <span key={index} className={styles.rosterName}>
                {name}
              </span>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AboutProgramCard;
