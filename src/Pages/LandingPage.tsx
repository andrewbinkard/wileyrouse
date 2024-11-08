import { FC } from "react";
import { useRoutes, Link, useLocation } from "react-router-dom";
import routes from "../Routes/routes";
import styles from "./LandingPage.module.scss";
import { routeLocations } from "../Routes/const";

const LandingPage: FC = () => {
  const location = useLocation();
  const element = useRoutes(routes);

  const isLandingPage = location.pathname === routeLocations.home;

  return (
    <>
      <div
        className={`${styles.landingPage} ${
          isLandingPage ? styles.landingPageBackground : ""
        }`}
      >
        {isLandingPage && (
          <>
            <h1>
              <Link to="/wiley">Wiley</Link>
            </h1>
            <h1>
              <Link to="/rouse">Rouse</Link>
            </h1>
          </>
        )}

        {/* Render the route elements based on the configuration */}
        {element}
      </div>
    </>
  );
};

export default LandingPage;
