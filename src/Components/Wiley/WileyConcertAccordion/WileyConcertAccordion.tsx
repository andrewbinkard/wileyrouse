import { FC, useState } from "react";
import WileyAccordionItem from "./WileyAccordionItem";
import styles from "./WileyConcertAccordion.module.scss";
import { wileyAccordionData } from "./const";

const WileyConcertAccordion: FC = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div className={styles.container}>
      <h2>CONCERT SELECTIONS</h2>
      <div className={styles.accordionContainer}>
        {wileyAccordionData.map(
          ({
            panelId,
            title,
            composer,
            details,
            conductor,
            year,
            grade,
            time,
            publisher,
            publisherWebsiteURL,
          }) => (
            <WileyAccordionItem
              key={panelId}
              panelId={panelId}
              expanded={expanded === panelId}
              handleChange={handleChange(panelId)}
              title={title}
              composer={composer}
              details={details}
              conductor={conductor}
              year={year}
              grade={grade}
              time={time}
              publisher={publisher}
              publisherWebsiteURL={publisherWebsiteURL}
            />
          )
        )}
      </div>
    </div>
  );
};

export default WileyConcertAccordion;
