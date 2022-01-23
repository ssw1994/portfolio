import React from "react";
import SideBar from "../sidebar/sidebar";
import Header from "../header/header";
import Footer from "../footer/footer";
import "./page.scss";
import { Outlet } from "react-router-dom";
function PageWrapper() {
  return (
    <div className="container mainContainer">
      <Header />
      <div className="app-content">
        <SideBar />
        <div className="page">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PageWrapper;
