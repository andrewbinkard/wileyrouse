import { FC } from "react";
import styles from "./WileyHeader.module.scss";

const WileyHeader: FC = () => {
  return (
    <div className={styles.headerContainer}>
      <h3>Wiley Middle School Wind Ensemble</h3>
      <p>Friday, December 20, 2024 | 8:30 AM | Ballroom 375E</p>
    </div>
  );
};

export default WileyHeader;
