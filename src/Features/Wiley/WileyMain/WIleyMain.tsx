import { FC } from "react";
import WileyConcertAccordion from "../../../Components/Wiley/WileyConcertAccordion";
import WileyHeader from "../WileyHeader";

const WileyMain: FC = () => {
  return (
    <div>
      <WileyHeader />
      <WileyConcertAccordion />
    </div>
  );
};

export default WileyMain;
