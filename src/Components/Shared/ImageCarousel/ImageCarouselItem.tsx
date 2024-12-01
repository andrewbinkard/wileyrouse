import { FC } from "react";
import Paper from "@mui/material/Paper";
import { ImageCarouselItemProps } from "./types";
import styles from "./ImageCarousel.module.scss";

const ImageCarouselItem: FC<ImageCarouselItemProps> = ({ imgSrc, section }) => {
  return (
    <Paper elevation={3}>
      <img
        src={imgSrc}
        alt={`Image of ${section}`}
        className={styles.imageContainer}
      />
    </Paper>
  );
};

export default ImageCarouselItem;
