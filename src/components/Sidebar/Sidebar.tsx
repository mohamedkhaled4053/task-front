import React from "react";
import {
  FaBook,
  FaGraduationCap,
  FaHome,
  FaRegCalendarAlt,
} from "react-icons/fa";
import { BsGraphUpArrow, BsMegaphone } from "react-icons/bs";
import "./style.scss";
import { NavLink } from "react-router-dom";
import { MdMenu } from "react-icons/md";

export const Sidebar = () => {
  let links = [
    { value: "dashboard", icon: <FaHome /> },
    { value: "schedule", icon: <FaRegCalendarAlt /> },
    { value: "courses", icon: <FaBook /> },
    { value: "gradebook", icon: <FaGraduationCap /> },
    { value: "performance", icon: <BsGraphUpArrow /> },
    { value: "announcements", icon: <BsMegaphone /> },
  ];

  return (
    <aside className="sidebar">
      <div className="title">Coligo</div>
      <div className="links">
        {links.map(({ value, icon }) => (
          <NavLink
            key={value}
            className={({ isActive }) => (isActive ? "active" : "")}
            to={value === "dashboard" ? "" : value}
          >
            {icon}
            {value}
          </NavLink>
        ))}
      </div>
      <MdMenu className="menu-bar" />
    </aside>
  );
};
