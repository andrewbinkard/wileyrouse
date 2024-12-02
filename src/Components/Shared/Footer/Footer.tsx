import { FC } from "react";
import styles from "./Footer.module.scss";
import { MdOutlineMail } from "react-icons/md";

const Footer: FC = () => {
  return (
    <div className={styles.footerContainer}>
      <h4>Website Designed and Built By</h4>
      <h3>
        <a href="mailto:andrewbinkard@gmail.com" className={styles.mailLink}>
          Andrew Binkard
          <MdOutlineMail />
        </a>
      </h3>
      <div className={styles.copyright}>
        <p>Copyright 2024 Rouse and Wiley Bands</p>
        <p>All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
