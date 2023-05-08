import React from "react";
import circleFull from "../assets/icons/circle-full.svg";
import circleEmpty from "../assets/icons/circle.svg";
import classes from "./About.module.css";

const Skill = ({ src, name, gauge, level }) => {
  return (
    <div className={classes.about__skill}>
      <img className={classes.about__skill_icon} src={src} alt={`${name} icon`} />
      <p className={classes.about__skill_name}>{name}</p>
      {gauge &&
        level.map((part, i) => (
          <img
            key={i}
            src={part === 1 ? circleFull : circleEmpty}
            alt="circle icon"
            className={classes.about__skill_level}
          ></img>
        ))}
    </div>
  );
};

export default Skill;
