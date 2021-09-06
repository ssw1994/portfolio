import React from "react";
import { links } from "../../modals/page.model";
import { Link } from "react-router-dom";
import "./sidebar.scss";
export default function SideBar() {
  return (
    <div className="side-bar">
      <ul className="nav-items">
        {links
          .filter((menu) => menu.isMenu)
          .map((menu, index) => {
            return (
              <li key={index} className="center-items">
                <Link to={menu.path} className="nav-link">
                  {menu.menu}
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
