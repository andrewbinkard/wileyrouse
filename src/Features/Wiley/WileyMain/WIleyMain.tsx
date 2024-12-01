import { FC } from "react";
import WileyConcertAccordion from "../../../Components/Wiley/WileyConcertAccordion";
import WileyHeader from "../WileyHeader";
import Button from "@mui/material/Button";
import styles from "./WileyMain.module.scss";
import { Link, Outlet } from "react-router-dom";
import WileyDirectors from "../WileyDirectors";
import Footer from "../../../Components/Shared/Footer/Footer";
import ImageCarousel from "../../../Components/Shared/ImageCarousel";
import { wileySections } from "../WileyMusicians/const";

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
      <h2>Musicians</h2>
      <ImageCarousel imgData={wileySections} />
      <Button
        classes={{ root: styles.linkButton }}
        component={Link}
        to={"wiley-musicians"}
        variant="contained"
      >
        Meet the Musicians
      </Button>
      <WileyDirectors />
      <Button
        classes={{ root: styles.linkButton }}
        component={Link}
        to={"wiley-bios"}
        variant="contained"
      >
        Read Bios
      </Button>
      <Outlet />
      <Footer />
    </div>
  );
};

export default WileyMain;
