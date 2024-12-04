import { FC, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import styles from "./Rouse.module.scss";
import RouseGroupImage from "../../assets/images/RouseGroupPhoto.jpeg";
import { routeLocations } from "../../Routes/const";
import RouseMain from "./RouseMain/RouseMain";
import RouseNavBar from "../../Components/Rouse/RouseNavBar";

const Rouse: FC = () => {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    let lastScrollTop = 0; // Initialize to 0 to avoid hiding on first load

    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop === 0) {
        // Ensure the navbar is always visible when at the top of the page
        setIsNavVisible(true);
      } else if (scrollTop < lastScrollTop) {
        // User is scrolling up
        setIsNavVisible(true);
      } else {
        // User is scrolling down
        setIsNavVisible(false);
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Prevent negative values
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (location.pathname === routeLocations.rouse) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  const isRouseMain = location.pathname === routeLocations.rouse;

  const contentToDisplay = isRouseMain ? (
    <RouseMain />
  ) : (
    <div className={styles.content}>
      <Outlet />
    </div>
  );

  return (
    <div className={styles.container}>
      {/* Navbar - Positioned on top of the image */}
      <div
        className={`${styles.navBarWrapper} ${
          isNavVisible ? styles.visible : styles.hidden
        }`}
      >
        <RouseNavBar />
      </div>

      {/* Group Image */}
      <div className={styles.imageContainer}>
        <img
          src={RouseGroupImage}
          alt="Rouse Group"
          className={styles.groupImage}
        />
      </div>

      {contentToDisplay}
    </div>
  );
};

export default Rouse;
