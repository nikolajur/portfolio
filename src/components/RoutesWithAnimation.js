import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ProjectsPage from "./Projects";
import HomePage from "./Home";
import AboutMePage from "./About";
import ContactPage from "./Contact";
import { AnimatePresence } from "framer-motion";

const RoutesWithAnimation = () => {
  const [isFirstRender, setIsFirstRender] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/" && isFirstRender) {
      setIsFirstRender(false);
    }
  }, [location.pathname, isFirstRender]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.key}>
        <Route path="/portfolio/" element={<HomePage isFirstRender={isFirstRender} />} />
        <Route path="/portfolio/projects" element={<ProjectsPage />} />
        <Route path="/portfolio/about" element={<AboutMePage />} />
        <Route path="/portfolio/contact" element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default RoutesWithAnimation;
