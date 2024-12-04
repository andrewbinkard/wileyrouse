import { FC, useRef, useState } from "react";
import styles from "./ComposerCard.module.scss";
import { ComposerCardProps } from "./types";
import Button from "@mui/material/Button";

const ComposerCard: FC<ComposerCardProps> = ({
  name,
  title,
  imgSrc,
  details,
  website,
}) => {
  const [expanded, setExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Split details into an array of paragraphs
  const paragraphs = details?.split("\n");

  const toggleExpanded = () => {
    if (expanded) {
      // If collapsing, scroll to the top of the <p> section
      cardRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setExpanded(!expanded);
  };

  return (
    <div className={styles.cardContainer} ref={cardRef}>
      <img
        src={imgSrc}
        alt={`Image of ${name}`}
        className={styles.composerImage}
      />
      <div className={styles.content}>
        <h2>{name}</h2>
        {title ? (
          <h4>{title}</h4>
        ) : (
          <a href={website} target="_blank" rel="noopener noreferrer">
            {website}
          </a>
        )}
        <p>
          {paragraphs?.[0]}
          {expanded &&
            paragraphs?.slice(1).map((para, index) => (
              <p key={index}>
                <br />
                {para}
              </p>
            ))}
        </p>
        <Button className={styles.readMoreButton} onClick={toggleExpanded}>
          {expanded ? "Show Less ▲" : "Read More ▼"}
        </Button>
      </div>
    </div>
  );
};

export default ComposerCard;
