import { FC } from "react";
import { useRoutes, Link, useLocation } from "react-router-dom";
import routes from "../Routes/routes";
import styles from "./LandingPage.module.scss";
import { routeLocations } from "../Routes/const";
import { Button } from "@mui/material";
import SchoolCard from "../Components/Wiley/Shared/SchoolCard";
import { performingSchoolData } from "./const";

const LandingPage: FC = () => {
  const location = useLocation();
  const element = useRoutes(routes);

  const isLandingPage = location.pathname === routeLocations.home;

  return (
    <div className={styles.landingPage}>
      {isLandingPage && (
        <div className={styles.cardBlock}>
          {performingSchoolData.map(
            ({
              schoolName,
              ensembleName,
              imgSrc,
              performanceDetails,
              route,
            }) => (
              <Button
                key={route}
                component={Link}
                to={route}
                style={{
                  borderRadius: "10px",
                  padding: "8px",
                  overflow: "hidden",
                  width: "100%",
                  maxWidth: "320px",
                }}
              >
                <SchoolCard
                  schoolName={schoolName}
                  ensembleName={ensembleName}
                  imgSrc={imgSrc}
                  performanceDetails={performanceDetails}
                />
              </Button>
            )
          )}
        </div>
      )}

      {/* Render the route elements based on the configuration */}
      {element}
    </div>
  );
};

export default LandingPage;
