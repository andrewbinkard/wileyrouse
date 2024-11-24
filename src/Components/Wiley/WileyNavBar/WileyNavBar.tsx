import { FC, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./WileyNavBar.module.scss";
import WileyLogo from "../../../assets/images/WileyLogo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const WileyNavBar: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // handle enabling and disabling of scrolling
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Disable scrolling
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      // Enable scrolling
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    }

    // Cleanup when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <div className={styles.navBarContainer}>
        {/* Logo */}
        <img src={WileyLogo} alt="WileyLogo" className={styles.logo} />

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
            to="acknowledgements"
            className={({ isActive }) =>
              isActive ? styles.activeLink : undefined
            }
          >
            Acknowledgements
          </NavLink>
          <NavLink
            to="private-lesson-faculty"
            className={({ isActive }) =>
              isActive ? styles.activeLink : undefined
            }
          >
            Private Lesson Faculty
          </NavLink>
          <NavLink
            to="letters-of-recommendation"
            className={({ isActive }) =>
              isActive ? styles.activeLink : undefined
            }
          >
            Letters of Recommendation
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
        {/* Logo in the top center */}
        <img src={WileyLogo} alt="Wiley Logo" className={styles.mobileLogo} />

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
            to="acknowledgements"
            className={({ isActive }) =>
              isActive ? styles.activeLink : undefined
            }
            onClick={toggleMobileMenu}
          >
            Acknowledgements
          </NavLink>
          <NavLink
            to="private-lesson-faculty"
            className={({ isActive }) =>
              isActive ? styles.activeLink : undefined
            }
            onClick={toggleMobileMenu}
          >
            Private Lesson Faculty
          </NavLink>
          <NavLink
            to="letters-of-recommendation"
            className={({ isActive }) =>
              isActive ? styles.activeLink : undefined
            }
            onClick={toggleMobileMenu}
          >
            Letters of Recommendation
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default WileyNavBar;
