import React from "react";
import Project from "./Project";
import { motion } from "framer-motion";
import { routeVariants } from "../variants/animation-variants";

import imageCountriesGame from "../assets/countries-thumbnail.png";
import imagePortfolio from "../assets/portfollio-thumbnail.png";

const ProjectsPage = () => {
  return (
    <motion.div
      className={"projects"}
      variants={routeVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
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
      <hr className="horizontal-line yellow" />
      <Project
        title=" Portfolio Page"
        /*  subtitle="Geography game in Czech" */
        link="https://nikolajur.github.io/"
        image={imagePortfolio}
        description="Personal portfolio page."
        tags={["HTML", "CSS", "JS", "React", "React Router", "Framer Motion"]}
        github="https://github.com/nikolajur/portfolio"
      />
    </motion.div>
  );
};

export default ProjectsPage;
