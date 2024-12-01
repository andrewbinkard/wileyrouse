import { FC } from "react";
import { wileySections } from "./const";
import MusiciansCard from "../../../Components/Shared/MusiciansCard";
import Footer from "../../../Components/Shared/Footer";

const WileyMusicians: FC = () => {
  return (
    <div>
      <h2>Musicians</h2>
      {wileySections.map(({ imgSrc, section, members }) => {
        return (
          <MusiciansCard
            imgSrc={imgSrc}
            sectionName={section}
            sectionMembers={members}
          />
        );
      })}

      <Footer />
    </div>
  );
};

export default WileyMusicians;
