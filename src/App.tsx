import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Wiley from "./Features/Wiley";
import Rouse from "./Features/Rouse";
import ScrollToTop from "./Components/Shared/ScrollToTop";
import routes from "./Routes/routes";

const App: FC = () => {
  const wileyRoutes = routes[0].children;
  const rouseRoutes = routes[1].children;
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Wiley Routes */}
        <Route path="wiley" element={<Wiley />}>
          {wileyRoutes?.map((route) => {
            return <Route path={route.path} element={route.element} />;
          })}
        </Route>

        {/* Rouse Routes */}
        <Route path="rouse" element={<Rouse />}>
          {rouseRoutes?.map((route) => {
            return <Route path={route.path} element={route.element} />;
          })}
        </Route>
      </Routes>
    </>
  );
};

export default App;
