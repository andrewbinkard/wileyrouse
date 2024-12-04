import { FC } from "react";
import RouseConcertAccordion from "../../../Components/Rouse/RouseConcertAccordion";
import RouseHeader from "../RouseHeader";
import Button from "@mui/material/Button";
import styles from "./RouseMain.module.scss";
import { Link, Outlet } from "react-router-dom";
import RouseDirectors from "../RouseDirectors";
import Footer from "../../../Components/Shared/Footer/Footer";
import ImageCarousel from "../../../Components/Shared/ImageCarousel";
import { rouseSections } from "../../SharedData/musicianData";

const RouseMain: FC = () => {
  return (
    <div className={styles.mainContainer}>
      <RouseHeader />
      <RouseConcertAccordion />
      <Button
        classes={{ root: styles.linkButton }}
        component={Link}
        to={"rouse-composers"}
        variant="contained"
      >
        Meet the Composers
      </Button>
      <br />
      <h2>MUSICIANS</h2>
      <ImageCarousel imgData={rouseSections} />
      <Button
        classes={{ root: styles.linkButton }}
        component={Link}
        to={"rouse-musicians"}
        variant="contained"
      >
        Meet the Musicians
      </Button>
      <br />
      <RouseDirectors />
      <Button
        classes={{ root: styles.linkButton }}
        component={Link}
        to={"rouse-bios"}
        variant="contained"
      >
        Read Bios
      </Button>
      <br />
      <h2>OTHER LINKS</h2>
      <Button
        classes={{ root: styles.linkButton }}
        component={Link}
        to={"rouse-private-lesson-faculty"}
        variant="contained"
      >
        Private Lesson Faculty
      </Button>
      <Button
        classes={{ root: styles.linkButton }}
        component={Link}
        to={"rouse-acknowledgements"}
        variant="contained"
      >
        Acknowledgements
      </Button>
      <Button
        classes={{ root: styles.linkButton }}
        component={Link}
        to={"rouse-letters-of-recognition"}
        variant="contained"
      >
        Letters of Recognition
      </Button>
      <Button
        classes={{ root: styles.linkButton }}
        component={Link}
        to={"rouse-about-program"}
        variant="contained"
      >
        About the Program
      </Button>
      <Button
        classes={{ root: styles.linkButton }}
        component={Link}
        to={"rouse-previous-band"}
        variant="contained"
      >
        2023-2024 Honor Band
      </Button>
      <Outlet />
      <br />
      <Footer />
    </div>
  );
};

export default RouseMain;
