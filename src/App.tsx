import { useRoutes, Link, useLocation } from "react-router-dom";
import routes from "./routes"; // Import the route configuration
import styles from "./App.module.scss";

function App() {
  const location = useLocation();
  const element = useRoutes(routes); // Dynamically generate routes from the config

  return (
    <div className={styles.landingPage}>
      {/* Render landing page only if the current path is "/" */}
      {location.pathname === "/" && (
        <>
          <h1>Choose a School</h1>
          <Link to="/wiley">Wiley</Link>
          <Link to="/rouse">Rouse</Link>
        </>
      )}

      {/* Render the route elements based on the configuration */}
      {element}
    </div>
  );
}

export default App;
