import { FC } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./DirectorCard.module.scss";
import { DirectorCardProps } from "./types";

const DirectorCard: FC<DirectorCardProps> = ({ name, imgSrc, title }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/wiley/wiley-bios/${name}`);
    console.log("penguin", { name });
  };

  return (
    <div className={styles.cardContainer} onClick={handleClick}>
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
