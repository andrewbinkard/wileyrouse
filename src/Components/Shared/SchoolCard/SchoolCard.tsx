import { FC } from "react";
import styles from "./SchoolCard.module.scss";
import { SchoolCardProps } from "./types";

const SchoolCard: FC<SchoolCardProps> = ({
  schoolName,
  imgSrc,
  performanceDetails,
}) => {
  const color = schoolName === "Rouse High School" ? "#cdb894" : "#b8b8b8";

  return (
    <div
      className={styles.cardContainer}
      style={{
        borderColor: color,
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
            color: color,
          }}
        >
          {schoolName}
        </h2>
        <p
          style={{
            color: color,
          }}
        >
          {performanceDetails}
        </p>
        <br />
        <p
          className={styles.clickMessage}
          style={{
            color: color,
          }}
        >
          Click to see program
        </p>
      </div>
    </div>
  );
};

export default SchoolCard;
