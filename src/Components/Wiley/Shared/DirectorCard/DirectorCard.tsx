import { FC } from "react";
import styles from "./DirectorCard.module.scss";
import { DirectorCardProps } from "./types";

const DirectorCard: FC<DirectorCardProps> = ({ name, imgSrc, title }) => {
  return (
    <div className={styles.cardContainer}>
      <img
        src={imgSrc}
        alt={`Image of ${name}`}
        className={styles.directorImage}
      />
      <div className={styles.content}>
        <h3>{name}</h3>
        {title && <h4>{title}</h4>}
      </div>
    </div>
  );
};

export default DirectorCard;
