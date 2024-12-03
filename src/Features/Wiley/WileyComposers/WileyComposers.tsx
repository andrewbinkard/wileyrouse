import { FC } from "react";
import styles from "./WileyComposers.module.scss";
import { composerData } from "../../SharedData/composerData";
import ComposerCard from "../../../Components/Shared/ComposerCard";
import Footer from "../../../Components/Shared/Footer";

const WileyComposers: FC = () => {
  return (
    <div className={styles.composersContainer}>
      <h1>Composers</h1>
      {composerData
        .filter(({ wiley }) => {
          return wiley;
        })
        .map(({ name, imgSrc, details, website }, idx) => {
          return (
            <ComposerCard
              key={idx}
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
