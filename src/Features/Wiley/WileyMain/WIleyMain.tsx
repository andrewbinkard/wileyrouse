import { FC } from "react";
import WileyConcertAccordion from "../../../Components/Wiley/WileyConcertAccordion";
import WileyHeader from "../WileyHeader";
import Button from "@mui/material/Button";
import styles from "./WileyMain.module.scss";
import { Link, Outlet } from "react-router-dom";
import WileyDirectors from "../WileyDirectors";
import Footer from "../../../Components/Wiley/Shared/Footer/Footer";

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
