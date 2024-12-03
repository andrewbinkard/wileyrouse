import { FC } from "react";
import styles from "./SchoolCard.module.scss";
import { SchoolCardProps } from "./types";

const SchoolCard: FC<SchoolCardProps> = ({
  schoolName,
  imgSrc,
  performanceDetails,
}) => {
  return (
    <div
      className={styles.cardContainer}
      style={{
        borderColor: schoolName === "Rouse High School" ? "#ac894e" : "#b8b8b8",
      }}
    >
      <img
        src={imgSrc}
        alt={`${schoolName} Logo`}
        className={styles.schoolLogo}
      />
      <div>
        <h2>{schoolName}</h2>
        <p>{performanceDetails}</p>
        <br />
        <p className={styles.clickMessage}>Click to see program</p>
      </div>
    </div>
  );
};

export default SchoolCard;
