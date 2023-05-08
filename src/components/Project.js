import React from "react";
import classes from "./Projects.module.css";

const Project = ({ title, subtitle, link, image, description, tags, github }) => {
  return (
    <div className={classes.projects__item}>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <div className={classes.projects__item_container}>
        <div className={classes.projects__item_image}>
          <a href={link} target="_blank" rel="noreferrer">
            <img src={image} alt="project-thumbnail" />
          </a>
        </div>
        <div className={classes.projects__item_description}>
          <div className={classes.projects__item_description_tags}>
            {tags.map((tag, i) => (
              <p key={i} className={classes.projects__item_description_tag}>
                {tag}
              </p>
            ))}
          </div>

          <p className={classes.projects__item_description_text}>{description}</p>
          <a href={link} target="_blank" rel="noreferrer">
            Visit Project's Page
          </a>
          <br />
          <a href={github} target="_blank" rel="noreferrer">
            View Source Code on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
