import React from "react";
import { motion } from "framer-motion";
import { routeVariants } from "../variants/animation-variants";
import linkedin from "../assets/icons/linkedin.svg";
import github from "../assets/icons/github.svg";
import email from "../assets/icons/email.svg";
import classes from "./Contact.module.css";

const ContactPage = () => {
  return (
    <motion.div
      className={classes.contact}
      variants={routeVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <p className={classes.contact__text}>Get in touch with me!</p>
      <a href="mailto:nikola.jurkova@email.cz">
        <img src={email} alt="email icon" className={classes.contact__icon}></img>
      </a>
      <a href="https://www.linkedin.com/in/nikola-jurkova/">
        <img src={linkedin} alt="linkedin icon" className={classes.contact__icon}></img>
      </a>
      <a href="https://github.com/nikolajur/">
        <img src={github} alt="github icon" className={classes.contact__icon}></img>
      </a>
    </motion.div>
  );
};

export default ContactPage;
