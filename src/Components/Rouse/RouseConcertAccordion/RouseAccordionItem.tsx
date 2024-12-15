import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AccordionItemProps } from "./types";
import styles from "./RouseAccordionItem.module.scss";

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
  soloist,
  imgSrc,
  directorNotes,
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
        {conductor && (
          <Typography
            classes={{ root: styles.conductorText }}
          >{`Conducted by ${conductor}`}</Typography>
        )}
        {soloist && (
          <Typography
            classes={{ root: styles.conductorText }}
          >{`${soloist}`}</Typography>
        )}
        <div className={styles.performanceDetails}>
          <Typography>{`Grade: ${grade}`}</Typography>
          <Typography>{`Performance time: ${time}`}</Typography>
        </div>

        <Typography>{details}</Typography>

        {directorNotes && (
          <>
            <div className={styles.border} />
            <div className={styles.directorNotes}>
              <p className={styles.fromTheDirector}>From the Director:</p>
              <Typography>{directorNotes}</Typography>{" "}
            </div>
          </>
        )}

        {imgSrc && (
          <img
            src={imgSrc}
            alt={`Program note image for ${title}`}
            className={styles.image}
          />
        )}
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionItem;
