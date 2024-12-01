import { FC } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./DirectorCard.module.scss";
import { DirectorCardProps } from "./types";

const DirectorCard: FC<DirectorCardProps> = ({
  name,
  imgSrc,
  title,
  instrument,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Using this component for PL faculty as well, who will not have a title passed in
    const isDirector = !!title;
    if (isDirector) navigate(`/wiley/wiley-bios/${name}`);
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
        {instrument && <h4>{instrument}</h4>}
      </div>
    </div>
  );
};

export default DirectorCard;
