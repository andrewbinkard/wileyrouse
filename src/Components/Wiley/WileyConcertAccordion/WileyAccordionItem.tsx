import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./WileyConcertAccordion.module.scss";
import { AccordionItemProps } from "./types";

const AccordionItem: React.FC<AccordionItemProps> = ({
  panelId,
  expanded,
  handleChange,
  title,
  composer,
  details,
}) => {
  return (
    <Accordion
      className={styles.accordion}
      expanded={expanded}
      onChange={handleChange}
    >
      <AccordionSummary
        className={styles.summary}
        expandIcon={<ExpandMoreIcon className={styles.expandButton} />}
        aria-controls={`${panelId}-content`}
        id={`${panelId}-header`}
      >
        <Typography
          className={styles.titleText}
          sx={{ width: "33%", flexShrink: 0 }}
        >
          {title}
        </Typography>
        <Typography className={styles.composerText}>{composer}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{details}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionItem;
