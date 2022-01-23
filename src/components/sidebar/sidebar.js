import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.scss";
export default function SideBar() {
  const baseUrl = "/blogger";
  const blogLinks = (
    <ul className="nav-items">
      <li className="center-items">
        <NavLink to={`${baseUrl}/home`} className="nav-link">
          home
        </NavLink>
      </li>
      <li className="center-items">
        <NavLink to={`${baseUrl}/career`} className="nav-link">
          career
        </NavLink>
      </li>
      <li className="center-items">
        <NavLink to={`${baseUrl}/contactus`} className="nav-link">
          contactus
        </NavLink>
      </li>
      <li className="center-items">
        <NavLink to={`${baseUrl}/aboutus`} className="nav-link">
          aboutus
        </NavLink>
      </li>
      <li className="center-items">
        <NavLink to={`${baseUrl}/blogs`} className="nav-link">
          blogs
        </NavLink>
      </li>
    </ul>
  );

  return <div className="side-bar">{blogLinks}</div>;
}
