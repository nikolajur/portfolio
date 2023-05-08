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
        <Route path="/" element={<HomePage isFirstRender={isFirstRender} />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutMePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default RoutesWithAnimation;
