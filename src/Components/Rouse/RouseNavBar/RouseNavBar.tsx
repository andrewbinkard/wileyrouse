import { FC, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./RouseNavBar.module.scss";
import RouseLogo from "../../../assets/images/RHS_r_Logo_300_ppi.png";
import { FaBars, FaTimes } from "react-icons/fa";

const RouseNavBar: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const disableScroll = () => {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
  };

  const enableScroll = () => {
    document.body.style.overflowY = "auto";
    document.documentElement.style.overflowY = "auto";
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      disableScroll();
    } else {
      enableScroll();
    }

    return () => enableScroll();
  }, [isMobileMenuOpen]);

  // Handle orientation changes
  useEffect(() => {
    const handleOrientationChange = () => {
      if (isMobileMenuOpen) disableScroll();

      if (!isMobileMenuOpen) enableScroll();

      // Scroll back to the top of the viewport
      window.scrollTo(0, 0);
    };

    const mediaQuery = window.matchMedia("(orientation: portrait)");
    mediaQuery.addEventListener("change", handleOrientationChange);

    return () => {
      mediaQuery.removeEventListener("change", handleOrientationChange);
    };
  }, []);

  return (
    <>
      <div className={styles.navBarContainer}>
        <NavLink to="/rouse">
          <img src={RouseLogo} alt="Rouse Logo" className={styles.logo} />
        </NavLink>

        <div className={styles.navLinks}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.activeLink : undefined
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/rouse"
            end
            className={({ isActive }) =>
              isActive ? styles.activeLink : undefined
            }
          >
            Rouse Main
          </NavLink>
          <NavLink
            to="rouse-acknowledgements"
            className={({ isActive }) =>
              isActive ? styles.activeLink : undefined
            }
          >
            Acknowledgements
          </NavLink>
          <NavLink
            to="rouse-private-lesson-faculty"
            className={({ isActive }) =>
              isActive ? styles.activeLink : undefined
            }
          >
            Private Lesson Faculty
          </NavLink>
          <NavLink
            to="rouse-letters-of-recognition"
            className={({ isActive }) =>
              isActive ? styles.activeLink : undefined
            }
          >
            Letters of Recognition
          </NavLink>
          <NavLink
            to="rouse-about-program"
            className={({ isActive }) =>
              isActive ? styles.activeLink : undefined
            }
          >
            About
          </NavLink>
        </div>

        <button
          className={styles.hamburgerMenu}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <FaBars />
        </button>
      </div>

      <div
        className={`${styles.mobileMenu} ${
          isMobileMenuOpen ? styles.open : ""
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <Link
          to="/rouse"
          onClick={toggleMobileMenu}
          className={styles.mobileLogoWrapper}
        >
          <img src={RouseLogo} alt="Rouse Logo" className={styles.mobileLogo} />
        </Link>

        <button
          className={styles.closeMenu}
          onClick={toggleMobileMenu}
          aria-label="Close menu"
        >
          <FaTimes />
        </button>

        <nav className={styles.mobileNavLinks}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? styles.activeLink : undefined
            }
            onClick={toggleMobileMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/rouse"
            end
            className={({ isActive }) =>
              isActive ? styles.activeLink : undefined
            }
            onClick={toggleMobileMenu}
          >
            Rouse Main
          </NavLink>
          <NavLink
            to="rouse-acknowledgements"
            className={({ isActive }) =>
              isActive ? styles.activeLink : undefined
            }
            onClick={toggleMobileMenu}
          >
            Acknowledgements
          </NavLink>
          <NavLink
            to="rouse-private-lesson-faculty"
            className={({ isActive }) =>
              isActive ? styles.activeLink : undefined
            }
            onClick={toggleMobileMenu}
          >
            Private Lesson Faculty
          </NavLink>
          <NavLink
            to="rouse-letters-of-recognition"
            className={({ isActive }) =>
              isActive ? styles.activeLink : undefined
            }
            onClick={toggleMobileMenu}
          >
            Letters of Recognition
          </NavLink>
          <NavLink
            to="rouse-about-program"
            className={({ isActive }) =>
              isActive ? styles.activeLink : undefined
            }
            onClick={toggleMobileMenu}
          >
            About
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default RouseNavBar;
