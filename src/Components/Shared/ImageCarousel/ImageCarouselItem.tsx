import { FC } from "react";
import Paper from "@mui/material/Paper";
import { SectionProps } from "./types";
import styles from "./ImageCarousel.module.scss";

const ImageCarouselItem: FC<SectionProps> = ({ imgSrc, section }) => {
  return (
    <Paper elevation={3} style={{ backgroundColor: "#242424", border: "none" }}>
      <img
        src={imgSrc}
        alt={`Image of ${section}`}
        className={styles.imageContainer}
      />
    </Paper>
  );
};

export default ImageCarouselItem;
