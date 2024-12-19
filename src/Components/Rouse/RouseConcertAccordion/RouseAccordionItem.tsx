import React, { useEffect, useRef } from "react";
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
  publisher,
  publisherWebsiteURL,
}) => {
  const accordionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (expanded && accordionRef.current) {
      const headerOffset = 60; // Adjust based on your header or spacing requirements

      // Allow layout to settle, then scroll to the element
      const timeout = setTimeout(() => {
        if (accordionRef.current) {
          const elementTop =
            accordionRef.current.getBoundingClientRect().top + window.scrollY;
          const containerPadding = parseFloat(
            getComputedStyle(
              accordionRef.current.parentElement || document.body
            ).paddingTop || "0"
          );
          const offsetPosition = elementTop - headerOffset - containerPadding;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 120);

      return () => clearTimeout(timeout);
    }
  }, [expanded]);

  return (
    <Accordion
      ref={accordionRef}
      expanded={expanded}
      onChange={handleChange}
      classes={{ root: styles.accordion }}
      slotProps={{
        transition: {
          timeout: 100, // Adjust the transition duration here
        },
      }}
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
          <Typography classes={{ root: styles.conductorText }}>{`Conducted by 
            ${conductor}`}</Typography>
        )}
        {soloist && (
          <Typography
            classes={{ root: styles.conductorText }}
          >{`${soloist}`}</Typography>
        )}
        <div className={styles.performanceDetails}>
          <Typography>{`Grade: ${grade}`}</Typography>
          <Typography>{`Performance time: ${time}`}</Typography>
          {publisher && (
            <a
              href={publisherWebsiteURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {publisher}
            </a>
          )}
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
