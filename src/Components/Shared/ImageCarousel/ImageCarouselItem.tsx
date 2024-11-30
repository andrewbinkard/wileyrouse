import { FC } from "react";
import Paper from "@mui/material/Paper";
import { ImageCarouselItemProps } from "./types";

const ImageCarouselItem: FC<ImageCarouselItemProps> = ({ imgSrc }) => {
  return (
    <Paper>
      <img src={imgSrc} />
    </Paper>
  );
};

export default ImageCarouselItem;
