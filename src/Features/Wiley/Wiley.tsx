import { FC } from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./Wiley.module.scss";

const Wiley: FC = () => {
  console.log("wiley component rendered");
  return (
    <div className={styles.container}>
      {/* <WileyHeader /> */}

      {/* Navigation Links to Subpages */}
      <Link to="acknowledgements">Acknowledgements</Link>
      <Link to="private-lesson-faculty">Private Lesson Faculty</Link>
      <Link to="letters-of-recommendation">Letters of Recommendation</Link>

      {/* Render additional static text and components here */}
      <section>{/* More content and interactive components */}</section>

      {/* Subpage content will render here */}
      <Outlet />
    </div>
  );
};

export default Wiley;
