import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../../components";
import "./Layout.scss";
export default function Layout() {
  return (
    <div className="shop_app">
      <Header />
      <Outlet />
    </div>
  );
}
