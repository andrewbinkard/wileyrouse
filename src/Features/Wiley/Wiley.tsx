import { FC, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import WileyNavBar from "../../Components/Wiley/WileyNavBar";
import styles from "./Wiley.module.scss";
import WileyGroupImage from "../../assets/images/WileyGroupPhoto.jpeg";
import { routeLocations } from "../../Routes/const";
import WileyMain from "./WileyMain/WIleyMain";

const Wiley: FC = () => {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    let lastScrollTop =
      window.pageYOffset || document.documentElement.scrollTop;

    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop < lastScrollTop) {
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
    if (location.pathname === routeLocations.wiley) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  const isWileyMain = location.pathname === routeLocations.wiley;

  const contentToDisplay = isWileyMain ? (
    <WileyMain />
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
        <WileyNavBar />
      </div>

      {/* Group Image */}
      <div className={styles.imageContainer}>
        <img
          src={WileyGroupImage}
          alt="Wiley Group"
          className={styles.groupImage}
        />
      </div>

      {contentToDisplay}
    </div>
  );
};

export default Wiley;
