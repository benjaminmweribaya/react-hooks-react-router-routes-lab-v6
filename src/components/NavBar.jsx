import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        ClassName={({ isActive }) => (isActive ? "active" : "")}
      >
        Home
      </NavLink>
      <NavLink
        to="/directors"
        ClassName={({ isActive }) => (isActive ? "active" : "")}
      >
        Directors
      </NavLink>
      <NavLink
        to="/actors"
        ClassName={({ isActive }) => (isActive ? "active" : "")}
      >
        Actors
      </NavLink>
    </nav>
  );
};

export default NavBar;
