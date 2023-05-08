import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { routeVariants } from "../variants/animation-variants";
import html5 from "../assets/icons/html5.svg";
import css from "../assets/icons/css3.svg";
import javascript from "../assets/icons/javascript.svg";
import react from "../assets/icons/react.svg";
import postgresql from "../assets/icons/postgresql.svg";
import nodejs from "../assets/icons/nodedotjs.svg";
import git from "../assets/icons/git.svg";
import code from "../assets/icons/code.svg";
import python from "../assets/icons/python.svg";
import typescript from "../assets/icons/typescript.svg";
import Skill from "./Skill";
import classes from "./About.module.css";

const AboutMePage = () => {
  return (
    <motion.div
      className="about"
      variants={routeVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h1>Who am I?</h1>
      <p className={classes.about__text}>
        I'm a self-taught <span className={classes.about__text_strong}>front-end developer</span>{" "}
        based in Czechia with a background in&nbsp;Geographic Information Systems. I believe
        in&nbsp;
        <span className={classes.about__text_strong}>lifelong learning</span> - I'm passionate
        about&nbsp;
        <span className={classes.about__text_strong}>developing new skills</span>!
      </p>

      <p className={classes.about__text}>
        I've been learning to code online and&nbsp;working on&nbsp;
        <Link to="/projects">MY PROJECTS</Link> since 2022. It's time to accept another challenge
        and&nbsp;start a&nbsp;
        <span className={classes.about__text_strong}>new career in&nbsp;IT</span>!
      </p>

      <p className={classes.about__text}>
        You can view my resume in PDF&nbsp;
        <a
          href={process.env.PUBLIC_URL + "/assets/CV_jurkova_nikola_en.pdf"}
          target="_blank"
          rel="noreferrer"
        >
          here
        </a>
        .
      </p>
      <hr className="horizontal-line blue" />
      <h1>I'm already familiar with</h1>

      <Skill src={html5} name="HTML5" gauge={true} level={[1, 1, 1, 0, 0]} />
      <Skill src={css} name="CSS" gauge={true} level={[1, 1, 1, 0, 0]} />
      <Skill src={javascript} name="Javascript" gauge={true} level={[1, 1, 1, 0, 0]} />
      <Skill src={react} name="React" gauge={true} level={[1, 1, 1, 0, 0]} />
      <Skill src={nodejs} name="Node.js" gauge={true} level={[1, 1, 0, 0, 0]} />
      <Skill src={code} name="REST API" gauge={true} level={[1, 1, 0, 0, 0]} />
      <Skill src={git} name="git" gauge={true} level={[1, 1, 0, 0, 0]} />
      <Skill src={postgresql} name="PostgreSQL" gauge={true} level={[1, 1, 0, 0, 0]} />
      <Skill src={python} name="Python" gauge={true} level={[1, 1, 0, 0, 0]} />

      <hr className="horizontal-line blue" />

      <h1>I'm currently learning...</h1>
      <Skill src={typescript} name="Typescript" gauge={false} />
      <Skill
        src="https://img.icons8.com/ios-filled/100/00ffff/nui2.png"
        name="UI/UX"
        gauge={false}
      />

      <hr className="horizontal-line blue" />

      <h1>Offline</h1>
      <p className={classes.about__text}>
        Besides coding, I love traveling, starring at maps, listening to Latino music, cooking &
        eating spicy food, and spending time outdoors!
      </p>
    </motion.div>
  );
};

export default AboutMePage;
