import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className={classes.navigation}>
      <button className={classes.navigation__hamburger} onClick={() => setShowMenu(!showMenu)}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="white">
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
      </button>
      <div
        className={
          showMenu ? `${classes.navigation__menu} ${classes.expanded}` : classes.navigation__menu
        }
      >
        <ul className={classes.navigation__list}>
          <li>
            <NavLink
              to={"/"}
              onClick={() => setShowMenu(false)}
              className={({ isActive }) => (isActive ? classes.active_link : undefined)}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about"}
              onClick={() => setShowMenu(false)}
              className={({ isActive }) => (isActive ? classes.active_link : undefined)}
            >
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/projects"}
              onClick={() => setShowMenu(false)}
              className={({ isActive }) => (isActive ? classes.active_link : undefined)}
            >
              My Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/contact"}
              onClick={() => setShowMenu(false)}
              className={({ isActive }) => (isActive ? classes.active_link : undefined)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
