import { FC } from "react";
import { useRoutes, Link, useLocation } from "react-router-dom";
import routes from "../Routes/routes";
import styles from "./LandingPage.module.scss";
import { routeLocations } from "../Routes/const";
import wileyLogo from "../assets/images/WileyLogo.png";
import rouseLogo from "../assets/images/RHS_r_Logo_300_ppi.png";

const LandingPage: FC = () => {
  const location = useLocation();
  const element = useRoutes(routes);

  const isLandingPage = location.pathname === routeLocations.home;

  return (
    <>
      <div className={styles.landingPage}>
        {isLandingPage && (
          <>
            <Link to="/rouse" className={styles.linkBlock}>
              <div className={styles.textSet}>
                <img
                  src={rouseLogo}
                  alt="Rouse Link"
                  className={styles.linkImage}
                />
                <div
                  className={`${styles.textContainer} ${styles.rouseTextContainer}`}
                >
                  <h2>Rouse High School Honor Band</h2>
                  <p>Thursday, December 19 | 3:00PM | 375AB</p>
                </div>
              </div>
            </Link>
            <Link to="/wiley" className={styles.linkBlock}>
              <div className={styles.textSet}>
                <img
                  src={wileyLogo}
                  alt="Wiley Link"
                  className={styles.linkImage}
                />
                <div className={styles.textContainer}>
                  <h2>Wiley Middle School Wind Ensemble</h2>
                  <p>Friday, December 20 | 8:30AM | 375E</p>
                </div>
              </div>
            </Link>
          </>
        )}

        {/* Render the route elements based on the configuration */}
        {element}
      </div>
    </>
  );
};

export default LandingPage;
