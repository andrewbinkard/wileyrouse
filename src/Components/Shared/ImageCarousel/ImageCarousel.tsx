import { FC } from "react";
import Carousel from "react-material-ui-carousel";
import ImageCarouselItem from "./ImageCarouselItem";
import { ImageCarouselProps } from "./types";
import styles from "./ImageCarousel.module.scss";

const ImageCarousel: FC<ImageCarouselProps> = ({ imgData }) => {
  return (
    <Carousel
      navButtonsProps={{
        style: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
        },
      }}
      autoPlay={false}
      className={styles.carouselContainer}
      animation={"slide"}
      navButtonsAlwaysVisible
    >
      {imgData.map(({ imgSrc, section }, idx) => {
        return (
          <ImageCarouselItem key={idx} imgSrc={imgSrc} section={section} />
        );
      })}
    </Carousel>
  );
};

export default ImageCarousel;
