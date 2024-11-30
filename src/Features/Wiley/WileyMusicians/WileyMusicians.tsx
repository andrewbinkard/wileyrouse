import { FC } from "react";
import ImageCarousel from "../../../Components/Shared/ImageCarousel";
import { wileySectionPhotos } from "./const";

const WileyMusicians: FC = () => {
  return <ImageCarousel imgData={wileySectionPhotos} />;
};

export default WileyMusicians;
