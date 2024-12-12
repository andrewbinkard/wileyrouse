import { FC } from "react";
import styles from "./RouseAcknowledgements.module.scss";
import { rouseAcknowledgementsData } from "../../SharedData/acknowledgementsData";
import AcknowledgementsCard from "../../../Components/Shared/AcknowledgementsCard";
import Footer from "../../../Components/Shared/Footer";
import RouseSponsors from "../../../assets/images/RouseSponsors.jpeg";
import RouseContributorsAndFAStaff from "./RouseContributorsAndFAStaff";

const RouseAcknowledgements: FC = () => {
  return (
    <div className={styles.container}>
      <h1>ACKNOWLEDGEMENTS</h1>
      <div className={styles.cardContainer}>
        {rouseAcknowledgementsData.map(({ toWhom, content }, idx) => {
          return (
            <div>
              <AcknowledgementsCard
                key={idx}
                toWhom={toWhom}
                content={content}
              />
            </div>
          );
        })}
      </div>
      <RouseContributorsAndFAStaff />
      <img
        src={RouseSponsors}
        alt={"Image of Rouse Sponsors"}
        className={styles.sponsorImage}
      />
      <Footer />
    </div>
  );
};

export default RouseAcknowledgements;
