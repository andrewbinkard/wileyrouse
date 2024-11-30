import { FC } from "react";
import Carousel from "react-material-ui-carousel";
import ImageCarouselItem from "./ImageCarouselItem";
import { ImageCarouselProps } from "./types";

const ImageCarousel: FC<ImageCarouselProps> = ({ imgData }) => {
  return (
    <Carousel autoPlay={false} navButtonsAlwaysVisible>
      {imgData.map(({ imgSrc }) => {
        return <ImageCarouselItem imgSrc={imgSrc} />;
      })}
    </Carousel>
  );
};

export default ImageCarousel;
