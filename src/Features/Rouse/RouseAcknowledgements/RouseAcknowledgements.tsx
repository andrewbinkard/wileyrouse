import { FC } from "react";
import styles from "./RouseAcknowledgements.module.scss";
import { rouseAcknowledgementsData } from "./const";
import AcknowledgementsCard from "../../../Components/Shared/AcknowledgementsCard";

const RouseAcknowledgements: FC = () => {
  return (
    <div className={styles.container}>
      <h1>ACKNOWLEDGEMENTS</h1>
      <div className={styles.cardContainer}>
        {rouseAcknowledgementsData.map(({ toWhom, content }, idx) => {
          return (
            <AcknowledgementsCard key={idx} toWhom={toWhom} content={content} />
          );
        })}
      </div>
    </div>
  );
};

export default RouseAcknowledgements;
