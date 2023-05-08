import React from "react";
import Circle from "./Circle";
import { motion } from "framer-motion";
import { routeVariants, childVariants } from "../variants/animation-variants";
import classes from "./Home.module.css";

const HomePage = ({ isFirstRender }) => {
  return (
    <motion.div
      className={classes.homepage}
      variants={routeVariants}
      initial={isFirstRender ? "firstRenderHidden" : "hidden"}
      animate={isFirstRender ? "firstRenderVisible" : "visible"}
      exit="exit"
    >
      <p className={classes.homepage__text}>Hi, I'm </p>
      <h1>Nikola Jurková</h1>
      <h2>GIS Specialist & Web Developer</h2>
      <div className={classes.homepage__link_circles}>
        <motion.div
          className={`${classes.homepage__link_circle_wrapper} ${classes.left_circle}`}
          variants={childVariants}
        >
          <Circle link="about" classCSS="about_me" label="About Me" />
        </motion.div>
        <motion.div
          className={`${classes.homepage__link_circle_wrapper} ${classes.middle_circle}`}
          variants={childVariants}
        >
          <Circle link="projects" classCSS="my_projects" label="My Projects" />
        </motion.div>
        <motion.div
          className={`${classes.homepage__link_circle_wrapper} ${classes.right_circle}`}
          variants={childVariants}
        >
          <Circle link="contact" classCSS="contact" label="Contact" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HomePage;
