import { FC, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./DirectorCard.module.scss";
import { DirectorCardProps } from "./types";
import Button from "@mui/material/Button";

const DirectorCard: FC<DirectorCardProps> = ({
  name,
  imgSrc,
  title,
  instrument,
  bio,
  wiley,
}) => {
  const [expanded, setExpanded] = useState(false); // To toggle bio visibility
  const navigate = useNavigate();
  const cardRef = useRef<HTMLDivElement>(null); // Reference for scrolling

  const handleClick = () => {
    const navString = wiley
      ? `/wiley/wiley-bios/${name}`
      : `/rouse/rouse-bios/${name}`;

    navigate(navString);

    const scrollToCard = () => {
      const cardElement = document.querySelector(`[alt="Image of ${name}"]`);
      if (cardElement) {
        const headerHeight =
          document.querySelector(".sticky-header")?.clientHeight || 0; // Adjust for sticky headers
        const elementPosition =
          cardElement.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    };

    // Use ResizeObserver to detect layout changes
    const observer = new ResizeObserver(() => {
      scrollToCard();
      observer.disconnect(); // Disconnect after the scroll adjustment
    });

    observer.observe(document.body); // Watch for changes in the page layout
  };

  const toggleExpanded = () => {
    if (expanded) {
      // Scroll back to the top of the card when collapsing
      cardRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setExpanded(!expanded);
  };

  return (
    <div className={styles.cardContainer} ref={cardRef} onClick={handleClick}>
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
      {bio && expanded && <p className={styles.bio}>{bio}</p>}
      {bio && (
        <Button className={styles.readMoreButton} onClick={toggleExpanded}>
          {expanded ? "Show Less ▲" : "Read Bio ▼"}
        </Button>
      )}
    </div>
  );
};

export default DirectorCard;
