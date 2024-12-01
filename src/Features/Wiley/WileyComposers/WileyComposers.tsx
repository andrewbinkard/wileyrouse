import { FC } from "react";
import styles from "./WileyComposers.module.scss";
import { composerData } from "./const";
import ComposerCard from "../../../Components/Shared/ComposerCard";
import Footer from "../../../Components/Shared/Footer";

const WileyComposers: FC = () => {
  return (
    <div className={styles.composersContainer}>
      <h1>Composers</h1>
      {composerData.map(({ name, imgSrc, details, website }) => {
        return (
          <ComposerCard
            name={name}
            imgSrc={imgSrc}
            details={details}
            website={website}
          />
        );
      })}
      <Footer />
    </div>
  );
};

export default WileyComposers;
