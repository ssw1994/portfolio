import React from "react";
import { links } from "../../modals/page.model";
import { Link } from "react-router-dom";
export default function SideBar() {
  return (
    <ul>
      {links.map((menu, index) => {
        return (
          <li key={index}>
            <Link to={menu.path} className="nav-link">
              {menu.menu}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
