import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./home/home";
import Blogs from "./blogs/blogs";
import Contact from "./contact/contact";
import BlogView from "./blogDetails/blogDetails";
import Career from "./career/career";
import AboutUs from "./about/about";
import { PageLayout } from "../../components";

export default function Blogger() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route path="home" element={<Home />}></Route>
          <Route path="contactus" element={<Contact />}></Route>
          <Route path="career" element={<Career />}></Route>
          <Route path="blogs" element={<Blogs />}></Route>
          <Route path="aboutus" element={<AboutUs />}></Route>
          <Route path="blogs/:id" element={<BlogView />}></Route>
        </Route>
      </Routes>
    </div>
  );
}
