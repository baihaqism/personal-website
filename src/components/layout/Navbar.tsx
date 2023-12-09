import React from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  const activeLink = "font-bold border-b-2 border-accent opacity-100";
  const inactiveLink = "text-primary opacity-70 hover:opacity-50";

  return (
    <div className="sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-30 mt-5">
      <div className="flex items-center justify-center h-16 space-x-16">
        <div className="flex space-x-16 animate-fadeInDown">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? activeLink : inactiveLink)}
          >
            Projects
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
