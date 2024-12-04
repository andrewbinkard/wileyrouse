import { FC } from "react";
import styles from "./RouseComposers.module.scss";
import { composerData } from "../../SharedData/composerData";
import ComposerCard from "../../../Components/Shared/ComposerCard";
import Footer from "../../../Components/Shared/Footer";

const RouseComposers: FC = () => {
  return (
    <div className={styles.composersContainer}>
      <h1>COMPOSERS & ARRANGERS</h1>
      {composerData
        .filter(({ rouse }) => {
          return rouse;
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

export default RouseComposers;
