import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AccordionItemProps } from "./types";
import styles from "./WileyAccordionItem.module.scss";

const AccordionItem: React.FC<AccordionItemProps> = ({
  panelId,
  expanded,
  handleChange,
  title,
  composer,
  details,
  grade,
  time,
  conductor,
}) => {
  return (
    <Accordion
      expanded={expanded}
      onChange={handleChange}
      classes={{ root: styles.accordion }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon classes={{ root: styles.expandButton }} />}
        classes={{ root: styles.summary }}
        id={`${panelId}-header`}
      >
        <div className={styles.summaryContent}>
          <Typography classes={{ root: styles.titleText }}>{title}</Typography>
          <Typography classes={{ root: styles.composerText }}>
            {composer}
          </Typography>
        </div>
      </AccordionSummary>
      <AccordionDetails classes={{ root: styles.details }}>
        <Typography classes={{ root: styles.performanceDetails }}>
          {conductor && (
            <p
              className={styles.conductorText}
            >{`Conducted by ${conductor}`}</p>
          )}
          <p>{`Grade: ${grade}`}</p>
          <p>{`Performance time: ${time}`}</p>
        </Typography>
        <Typography>{details}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionItem;
