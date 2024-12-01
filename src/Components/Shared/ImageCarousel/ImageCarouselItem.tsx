import { FC, useEffect, useState, useRef } from "react";
import Paper from "@mui/material/Paper";
import { SectionProps } from "./types";
import styles from "./ImageCarousel.module.scss";

const ImageCarouselItem: FC<SectionProps> = ({ imgSrc, section }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imageRef.current) observer.observe(imageRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <Paper ref={imageRef} elevation={3} className={styles.card}>
      <div className={styles.imageWrapper}>
        {isVisible ? (
          <img
            src={imgSrc}
            alt={`Image of ${section}`}
            className={styles.image}
          />
        ) : (
          <div className={styles.placeholder}>Loading...</div>
        )}
      </div>
    </Paper>
  );
};

export default ImageCarouselItem;
