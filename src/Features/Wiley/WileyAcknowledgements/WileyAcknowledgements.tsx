import { FC } from "react";
import styles from "./WileyAcknowledgements.module.scss";
import { wileyAcknowledgementsData } from "./const";
import AcknowledgementsCard from "../../../Components/Shared/AcknowledgementsCard";

const WileyAcknowledgements: FC = () => {
  return (
    <div>
      <h2>Acknowledgements</h2>
      <div className={styles.cardContainer}>
        {wileyAcknowledgementsData.map(({ toWhom, content }, idx) => {
          return (
            <AcknowledgementsCard key={idx} toWhom={toWhom} content={content} />
          );
        })}
      </div>
    </div>
  );
};

export default WileyAcknowledgements;
