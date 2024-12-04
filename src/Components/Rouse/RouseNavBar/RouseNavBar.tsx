import { FC, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./RouseNavBar.module.scss";
import RouseLogo from "../../../assets/images/RHS_r_Logo_300_ppi.png";
import { FaBars, FaTimes } from "react-icons/fa";

const RouseNavBar: FC = () => {
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
      document.body.style.overflowY = "auto";
      document.documentElement.style.overflowY = "auto";
    }

    // Cleanup when the component unmounts
    return () => {
      document.body.style.overflowY = "auto";
      document.documentElement.style.overflowY = "auto";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <div className={styles.navBarContainer}>
        {/* Logo */}
        <NavLink to="/rouse">
          <img src={RouseLogo} alt="Rouse Logo" className={styles.logo} />
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
          to="/rouse"
          onClick={toggleMobileMenu}
          className={styles.mobileLogoWrapper}
        >
          <img src={RouseLogo} alt="Rouse Logo" className={styles.mobileLogo} />
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
