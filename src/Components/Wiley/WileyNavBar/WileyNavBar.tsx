import { FC } from "react";
import { NavLink } from "react-router-dom";
import styles from "./WileyNavBar.module.scss";
import WileyLogo from "../../../assets/images/WileyLogo.png";

const WileyNavBar: FC = () => {
  return (
    <div className={styles.navBarContainer}>
      {/* Logo on the left */}
      <img src={WileyLogo} alt="WileyLogo" className={styles.logo} />

      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? styles.activeLink : undefined)}
      >
        Home
      </NavLink>
      <NavLink
        to="/wiley"
        end
        className={({ isActive }) => (isActive ? styles.activeLink : undefined)}
      >
        Wiley Main
      </NavLink>
      <NavLink
        to="acknowledgements"
        className={({ isActive }) => (isActive ? styles.activeLink : undefined)}
      >
        Acknowledgements
      </NavLink>
      <NavLink
        to="private-lesson-faculty"
        className={({ isActive }) => (isActive ? styles.activeLink : undefined)}
      >
        Private Lesson Faculty
      </NavLink>
      <NavLink
        to="letters-of-recommendation"
        className={({ isActive }) => (isActive ? styles.activeLink : undefined)}
      >
        Letters of Recommendation
      </NavLink>
    </div>
  );
};

export default WileyNavBar;
