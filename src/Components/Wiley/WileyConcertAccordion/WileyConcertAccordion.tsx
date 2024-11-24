import { FC, useState } from "react";
import WileyAccordionItem from "./WileyAccordionItem";
import styles from "./WileyConcertAccordion.module.scss";
import { wileyAccordionData } from "./const";

const WileyConcertAccordion: FC = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div className={styles.container}>
      {wileyAccordionData.map(({ panelId, title, composer, details }) => (
        <WileyAccordionItem
          key={panelId}
          panelId={panelId}
          expanded={expanded === panelId}
          handleChange={handleChange(panelId)}
          title={title}
          composer={composer}
          details={details}
        />
      ))}
    </div>
  );
};

export default WileyConcertAccordion;
