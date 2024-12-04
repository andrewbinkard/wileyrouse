import { FC } from "react";
import styles from "./RouseHeader.module.scss";

const RouseHeader: FC = () => {
  return (
    <div className={styles.headerContainer}>
      <h1>Rouse High School</h1>
      <h2>Honor Band</h2>
      <p>Thursday, December 19, 2024</p>
      <p>3:00 PM | Ballroom 375AB</p>
    </div>
  );
};

export default RouseHeader;
