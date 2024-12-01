export interface ImageCarouselProps {
  imgData: {
    imgSrc: string;
    section: string;
  }[];
}

export interface SectionProps {
  imgSrc: string;
  section: string;
  members?: string[];
}
