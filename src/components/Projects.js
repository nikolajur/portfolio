import React from "react";
import Project from "./Project";
import { motion } from "framer-motion";
import { routeVariants } from "../variants/animation-variants";

import imageCountriesGame from "../assets/countries-thumbnail.png";
import imagePortfolio from "../assets/portfollio-thumbnail.png";
import imageWeatherApp from "../assets/weather-thumbnail.png";

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
        title="European Countries"
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
        title="Portfolio Page"
        link="https://nikolajur.github.io/"
        image={imagePortfolio}
        description="Personal portfolio page."
        tags={["HTML", "CSS", "JS", "React", "React Router", "Framer Motion"]}
        github="https://github.com/nikolajur/portfolio"
      />
      <hr className="horizontal-line yellow" />
      <Project
        title="Weather Info App"
        link="https://weather-info-app-nj.onrender.com/"
        image={imageWeatherApp}
        description="Info on current weather and weather forecast. Based on OpenWeather & Open-Meteo APIs."
        tags={["HTML", "CSS", "JS", "React", "Leaflet", "Framer Motion"]}
        github="https://github.com/nikolajur/weather-info-app"
      />
    </motion.div>
  );
};

export default ProjectsPage;
