import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { directorData } from "../../SharedData/directorData";
import ComposerCard from "../../../Components/Shared/ComposerCard";
import styles from "./WileyBios.module.scss";
import Footer from "../../../Components/Shared/Footer";

const WileyBios: FC = () => {
  const { directorName } = useParams<{ directorName: string }>();

  useEffect(() => {
    if (directorName) {
      const targetElement = document.getElementById(directorName);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [directorName]);

  return (
    <div className={styles.biosContainer}>
      <h1>Directors and Conductors</h1>
      {directorData
        .filter(({ wiley }) => {
          return wiley;
        })
        .map(({ name, imgSrc, details, title }) => {
          return (
            <div id={name} key={name}>
              <ComposerCard
                name={name}
                imgSrc={imgSrc}
                details={details}
                title={title}
              />
            </div>
          );
        })}
      <Footer />
    </div>
  );
};

export default WileyBios;
