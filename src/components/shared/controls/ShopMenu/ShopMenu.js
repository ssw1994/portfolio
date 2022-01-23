import React from "react";
import { NavLink } from "react-router-dom";
export default function ShopMenu() {
  const shoppingMenu = [
    {
      name: "Add Product",
      link: "/shop/product/create",
    },
  ];
  return (
    <div className="side-bar">
      <ul className="nav-items">
        {shoppingMenu.map((menu, index) => {
          return (
            <li key={index} className="center-items">
              <NavLink to={menu.link} className="nav-link">
                {menu.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
