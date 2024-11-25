import { FC } from "react";
import WileyConcertAccordion from "../../../Components/Wiley/WileyConcertAccordion";
import WileyHeader from "../WileyHeader";
import Button from "@mui/material/Button";
import styles from "./WileyMain.module.scss";
import { Link, Outlet } from "react-router-dom";

const WileyMain: FC = () => {
  return (
    <div className={styles.mainContainer}>
      <WileyHeader />
      <WileyConcertAccordion />
      <Button
        classes={{ root: styles.composerButton }}
        component={Link}
        to={"wiley-composers"}
        variant="contained"
      >
        Meet the Composers
      </Button>
      <Outlet />
    </div>
  );
};

export default WileyMain;
