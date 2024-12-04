import { FC } from "react";
import styles from "./MusiciansCard.module.scss";
import { MusiciansCardProps } from "./types";

const MusiciansCard: FC<MusiciansCardProps> = ({
  imgSrc,
  sectionName,
  sectionMembers,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={imgSrc}
          alt={`${sectionName} section`}
          className={styles.image}
        />
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.sectionName}>{sectionName}</h2>
        <div className={styles.membersContainer}>
          {sectionMembers?.map((member, index) => (
            <span key={index} className={styles.member}>
              {member}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MusiciansCard;
