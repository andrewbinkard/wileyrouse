import { FC, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import WileyNavBar from "../../Components/Wiley/WileyNavBar";
import styles from "./Wiley.module.scss";
import WileyHeader from "./WileyHeader";
import WileyGroupImage from "../../assets/images/WileyGroupPhoto.jpeg"; // Import the image
import WileyConcertAccordion from "../../Components/Wiley/WileyConcertAccordion";

const Wiley: FC = () => {
  const [isNavVisible, setIsNavVisible] = useState(true);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      // Hide the navbar if scrolling down, show it if scrolling up
      if (scrollTop > lastScrollTop) {
        setIsNavVisible(false); // Scrolling down
      } else {
        setIsNavVisible(true); // Scrolling up
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For mobile or negative scrolling
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

      {/* Header */}
      <WileyHeader />

      <WileyConcertAccordion />

      {/* Content */}
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default Wiley;
