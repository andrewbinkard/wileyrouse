import { FC, useState } from "react";
import WileyAccordionItem from "./RouseAccordionItem";
import styles from "./RouseConcertAccordion.module.scss";
import { rouseAccordionData } from "./const";

const RouseConcertAccordion: FC = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div className={styles.container}>
      <h2>CONCERT SELECTIONS</h2>
      <div className={styles.accordionContainer}>
        {rouseAccordionData.map(
          ({
            panelId,
            title,
            composer,
            details,
            conductor,
            year,
            grade,
            time,
            soloist,
            imgSrc,
            directorNotes,
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
              soloist={soloist}
              imgSrc={imgSrc}
              directorNotes={directorNotes}
            />
          )
        )}
      </div>
    </div>
  );
};

export default RouseConcertAccordion;
