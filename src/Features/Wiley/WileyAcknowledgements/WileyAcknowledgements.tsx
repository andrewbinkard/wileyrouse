import { FC } from "react";
import styles from "./WileyAcknowledgements.module.scss";
import AcknowledgementsCard from "../../../Components/Shared/AcknowledgementsCard";
import { wileyAcknowledgementsData } from "../../SharedData/acknowledgementsData";
import TunerCaddyLogo from "../../../assets/images/TunerCaddyLogo.jpg";

const WileyAcknowledgements: FC = () => {
  return (
    <div className={styles.container}>
      <h1>ACKNOWLEDGEMENTS</h1>
      <div className={styles.cardContainer}>
        {wileyAcknowledgementsData.map(({ toWhom, content }, idx) => {
          return (
            <AcknowledgementsCard key={idx} toWhom={toWhom} content={content} />
          );
        })}
      </div>
      <h2>SPONSORS</h2>
      <img
        src={TunerCaddyLogo}
        alt={"Image of Tuner Caddy Logo"}
        className={styles.sponsorImage}
      />
    </div>
  );
};

export default WileyAcknowledgements;
