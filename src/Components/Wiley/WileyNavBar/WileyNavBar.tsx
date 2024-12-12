import { FC, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./WileyNavBar.module.scss";
import WileyLogo from "../../../assets/images/WileyLogo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const WileyNavBar: FC = () => {
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

  // Manage scrolling when the menu state changes
  useEffect(() => {
    if (isMobileMenuOpen) {
      disableScroll();
    } else {
      enableScroll();
    }

    return () => enableScroll();
  }, [isMobileMenuOpen]);

  // Ensure the menu remains visible on orientation changes
  useEffect(() => {
    const handleOrientationChange = () => {
      // Prevent any scrolling
      if (isMobileMenuOpen) {
        disableScroll();
      }

      // Ensure the menu is positioned at the top of the viewport
      window.scrollTo(0, 0);
    };

    const mediaQuery = window.matchMedia("(orientation: portrait)");
    mediaQuery.addEventListener("change", handleOrientationChange);

    return () => {
      mediaQuery.removeEventListener("change", handleOrientationChange);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <div className={styles.navBarContainer}>
        {/* Logo */}
        <NavLink to="/wiley">
          <img src={WileyLogo} alt="WileyLogo" className={styles.logo} />
        </NavLink>

        {/* Desktop Navigation Links */}
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
            to="/wiley"
            end
            className={({ isActive }) =>
              isActive ? styles.activeLink : undefined
            }
          >
            Wiley Main
          </NavLink>
          <NavLink
            to="wiley-acknowledgements"
            className={({ isActive }) =>
              isActive ? styles.activeLink : undefined
            }
          >
            Acknowledgements
          </NavLink>
          <NavLink
            to="wiley-private-lesson-faculty"
            className={({ isActive }) =>
              isActive ? styles.activeLink : undefined
            }
          >
            Private Lesson Faculty
          </NavLink>
          <NavLink
            to="wiley-letters-of-recognition"
            className={({ isActive }) =>
              isActive ? styles.activeLink : undefined
            }
          >
            Letters of Recognition
          </NavLink>
          <NavLink
            to="wiley-about-program"
            className={({ isActive }) =>
              isActive ? styles.activeLink : undefined
            }
          >
            About
          </NavLink>
        </div>

        {/* Mobile Hamburger Menu */}
        <button
          className={styles.hamburgerMenu}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile Modal */}
      <div
        className={`${styles.mobileMenu} ${
          isMobileMenuOpen ? styles.open : ""
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        {/* Logo at the top */}
        <Link
          to="/wiley"
          onClick={toggleMobileMenu}
          className={styles.mobileLogoWrapper}
        >
          <img src={WileyLogo} alt="Wiley Logo" className={styles.mobileLogo} />
        </Link>

        {/* Close Button */}
        <button
          className={styles.closeMenu}
          onClick={toggleMobileMenu}
          aria-label="Close menu"
        >
          <FaTimes />
        </button>

        {/* Navigation Links */}
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
            to="/wiley"
            end
            className={({ isActive }) =>
              isActive ? styles.activeLink : undefined
            }
            onClick={toggleMobileMenu}
          >
            Wiley Main
          </NavLink>
          <NavLink
            to="wiley-acknowledgements"
            className={({ isActive }) =>
              isActive ? styles.activeLink : undefined
            }
            onClick={toggleMobileMenu}
          >
            Acknowledgements
          </NavLink>
          <NavLink
            to="wiley-private-lesson-faculty"
            className={({ isActive }) =>
              isActive ? styles.activeLink : undefined
            }
            onClick={toggleMobileMenu}
          >
            Private Lesson Faculty
          </NavLink>
          <NavLink
            to="wiley-letters-of-recognition"
            className={({ isActive }) =>
              isActive ? styles.activeLink : undefined
            }
            onClick={toggleMobileMenu}
          >
            Letters of Recognition
          </NavLink>
          <NavLink
            to="wiley-about-program"
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

export default WileyNavBar;
