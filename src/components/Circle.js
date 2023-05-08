import React from "react";
import { Link } from "react-router-dom";
import classes from "./Home.module.css";

const Circle = ({ link, classCSS, label }) => {
  let style;
  if (classCSS === "about_me") {
    style = classes.about_me;
  } else if (classCSS === "my_projects") {
    style = classes.my_projects;
  } else if (classCSS === "contact") {
    style = classes.contact;
  }

  // console.log(style);
  return (
    <Link to={`/${link}`} className={`${classes.homepage__link_circle} ${style}`}>
      {label}
    </Link>
  );
};

export default Circle;
