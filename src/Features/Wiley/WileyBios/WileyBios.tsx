import { FC } from "react";
import { wileyDirectorData } from "../WileyDirectors/const";
import ComposerCard from "../../../Components/Wiley/Shared/ComposerCard";
import styles from "./WileyBios.module.scss";
import Footer from "../../../Components/Wiley/Shared/Footer";

const WileyBios: FC = () => {
  return (
    <div className={styles.biosContainer}>
      <h2>Directors and Conductors</h2>
      {wileyDirectorData.map(({ name, imgSrc, details, title }) => {
        return (
          <ComposerCard
            name={name}
            imgSrc={imgSrc}
            details={details}
            title={title}
          />
        );
      })}
      <Footer />
    </div>
  );
};

export default WileyBios;
