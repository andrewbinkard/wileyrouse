import { FC } from "react";
import styles from "./Footer.module.scss";

const Footer: FC = () => {
  return (
    <div className={styles.footerContainer}>
      <h4>Website Designed and Built By</h4>
      <h3>Andrew Binkard</h3>
      <div className={styles.copyright}>
        <p>Copyright 2024 Rouse and Wiley Bands</p>
        <p>All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
