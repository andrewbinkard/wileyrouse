import { FC } from "react";
import styles from "./SchoolCard.module.scss";
import { SchoolCardProps } from "./types";

const SchoolCard: FC<SchoolCardProps> = ({
  schoolName,
  imgSrc,
  performanceDetails,
}) => {
  const textColor = schoolName === "Rouse High School" ? "#ac894e" : "#b8b8b8";

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
        <h2
          style={{
            color: textColor,
          }}
        >
          {schoolName}
        </h2>
        <p
          style={{
            color: textColor,
          }}
        >
          {performanceDetails}
        </p>
        <br />
        <p
          className={styles.clickMessage}
          style={{
            color: textColor,
          }}
        >
          Click to see program
        </p>
      </div>
    </div>
  );
};

export default SchoolCard;
