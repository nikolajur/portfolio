import React from "react";
import Project from "./Project";
import { motion } from "framer-motion";
import { routeVariants } from "../variants/animation-variants";

import imageCountriesGame from "../assets/countries-thumbnail.png";

const ProjectsPage = () => {
  return (
    <motion.div
      className={"projects"}
      variants={routeVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* <h1>My Projects</h1> */}
      <Project
        title=" European Countries"
        subtitle="Geography game in Czech"
        link="https://staty-evropy.onrender.com/"
        image={imageCountriesGame}
        description="A full-stack web app where users can check their knowledge of European Countries."
        tags={[
          "HTML",
          "CSS",
          "JS",
          "React",
          "Leaflet",
          "Framer Motion",
          "PostgreSQL",
          "PostGIS",
          "Node.js",
          "Express",
          "node-postgres"
        ]}
        github="https://github.com/nikolajur/european-countries"
      />
    </motion.div>
  );
};

export default ProjectsPage;
