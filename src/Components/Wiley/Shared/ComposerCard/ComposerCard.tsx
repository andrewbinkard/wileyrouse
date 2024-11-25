import { FC } from "react";
import styles from "./ComposerCard.module.scss";
import { ComposerCardProps } from "./types";

const ComposerCard: FC<ComposerCardProps> = ({
  name,
  imgSrc,
  details,
  website,
}) => {
  return (
    <div className={styles.cardContainer}>
      <img
        src={imgSrc}
        alt={`Image of ${name}`}
        className={styles.composerImage}
      />
      <div className={styles.content}>
        <h3>{name}</h3>
        <a href={website} target="_blank" rel="noopener noreferrer">
          {website}
        </a>
        <p>{details}</p>
      </div>
    </div>
  );
};

export default ComposerCard;
