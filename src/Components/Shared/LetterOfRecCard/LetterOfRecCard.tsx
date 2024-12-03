import { FC, useEffect, useState } from "react";
import { LetterOfRecCardProps } from "./types";
import { MdClose } from "react-icons/md";
import styles from "./LetterOfRecCard.module.scss";
import { disableBodyScroll, enableBodyScroll } from "./utils";

const LetterOfRecCard: FC<LetterOfRecCardProps> = ({
  name,
  title,
  headshotSrc,
  letterSrc,
}) => {
  const [isOverlayVisible, setOverlayVisible] = useState(false);

  const toggleOverlay = () => {
    setOverlayVisible(!isOverlayVisible);
  };

  const closeOverlay = () => {
    setOverlayVisible(false);
  };

  useEffect(() => {
    if (isOverlayVisible) {
      disableBodyScroll();
    } else {
      enableBodyScroll();
    }

    return () => {
      enableBodyScroll();
    };
  }, [isOverlayVisible]);

  return (
    <>
      <div className={styles.cardContainer}>
        <div className={styles.leftSection}>
          <img
            className={styles.headshot}
            src={headshotSrc}
            alt={`Image of ${name}`}
          />
          <div className={styles.textContainer}>
            <h2 className={styles.name}>{name}</h2>
            <h3 className={styles.title}>{title}</h3>
          </div>
        </div>
        <div className={styles.rightSection}>
          <img
            className={styles.letter}
            src={letterSrc}
            alt={`Letter of recognition from ${name}`}
            onClick={toggleOverlay}
          />
        </div>
      </div>

      {isOverlayVisible && (
        <div className={styles.overlay} onClick={closeOverlay}>
          <MdClose className={styles.closeIcon} onClick={closeOverlay} />
          <div
            className={styles.overlayContent}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              className={styles.fullSizeLetter}
              src={letterSrc}
              alt={`Full-size letter from ${name}`}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default LetterOfRecCard;
