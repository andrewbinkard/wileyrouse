import { FC } from "react";
import styles from "./WileyComposers.module.scss";
import { composerData } from "./const";
import ComposerCard from "../../../Components/Wiley/Shared/ComposerCard";

const WileyComposers: FC = () => {
  return (
    <div className={styles.composersContainer}>
      <h2>Composers</h2>
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
    </div>
  );
};

export default WileyComposers;
