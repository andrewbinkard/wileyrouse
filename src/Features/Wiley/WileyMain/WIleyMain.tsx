import { FC } from "react";
import WileyConcertAccordion from "../../../Components/Wiley/WileyConcertAccordion";
import WileyHeader from "../WileyHeader";
import Button from "@mui/material/Button";
import styles from "./WileyMain.module.scss";
import { Link, Outlet } from "react-router-dom";
import WileyDirectors from "../WileyDirectors";
import Footer from "../../../Components/Shared/Footer/Footer";
import ImageCarousel from "../../../Components/Shared/ImageCarousel";
import { wileySections } from "../../SharedData/musicianData";

const WileyMain: FC = () => {
  return (
    <div className={styles.mainContainer}>
      <WileyHeader />
      <WileyConcertAccordion />
      <Button
        classes={{ root: styles.linkButton }}
        component={Link}
        to={"wiley-composers"}
        variant="contained"
      >
        Meet the Composers
      </Button>
      <br />
      <h2>MUSICIANS</h2>
      <ImageCarousel imgData={wileySections} />
      <Button
        classes={{ root: styles.linkButton }}
        component={Link}
        to={"wiley-musicians"}
        variant="contained"
      >
        Meet the Musicians
      </Button>
      <br />
      <WileyDirectors />
      <Button
        classes={{ root: styles.linkButton }}
        component={Link}
        to={"wiley-bios"}
        variant="contained"
      >
        Read Bios
      </Button>
      <br />
      <h2>OTHER LINKS</h2>
      <Button
        classes={{ root: styles.linkButton }}
        component={Link}
        to={"wiley-private-lesson-faculty"}
        variant="contained"
      >
        Private Lesson Faculty
      </Button>
      <Button
        classes={{ root: styles.linkButton }}
        component={Link}
        to={"wiley-acknowledgements"}
        variant="contained"
      >
        Acknowledgements
      </Button>
      <Button
        classes={{ root: styles.linkButton }}
        component={Link}
        to={"wiley-letters-of-recognition"}
        variant="contained"
      >
        Letters of Recognition
      </Button>
      <Button
        classes={{ root: styles.linkButton }}
        component={Link}
        to={"wiley-about-program"}
        variant="contained"
      >
        About the Program
      </Button>
      <Button
        classes={{ root: styles.linkButton }}
        component={Link}
        to={"wiley-previous-band"}
        variant="contained"
      >
        2023-2024 Wind Ensemble
      </Button>
      <Outlet />
      <br />
      <Footer />
    </div>
  );
};

export default WileyMain;
