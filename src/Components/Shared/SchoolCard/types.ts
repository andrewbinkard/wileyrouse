export interface SchoolCardProps {
  imgSrc: string;
  schoolName: string;
  ensembleName: string;
  performanceDetails: string;
}

export interface SchoolCardWithRoute extends SchoolCardProps {
  route: string;
}
