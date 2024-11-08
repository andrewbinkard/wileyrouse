import { FC } from "react";
import styles from "./WileyAcknowledgements.module.scss";

interface AcknowledgementsProps {
  // school: string;
}

const WileyAcknowledgements: FC<AcknowledgementsProps> = () => {
  return <div className={styles.container}>Acknowledgements</div>;
};

export default WileyAcknowledgements;
