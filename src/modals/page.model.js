import * as Pages from "../pages";
export const links = [
  { menu: "About", path: "/about", component: Pages.About, isMenu: true },
  { menu: "Home", path: "/home", component: Pages.Home, isMenu: true },
  {
    menu: "Contact Us",
    path: "/contactus",
    component: Pages.Contact,
    isMenu: true,
  },
  { menu: "Career", path: "/career", component: Pages.Career, isMenu: true },
  { menu: "Blogs", path: "/blogs", component: Pages.Blogs, isMenu: true },
  {
    menu: "BlogDetails",
    path: "/blogs/:id",
    component: Pages.BlogDetails,
    isMenu: false,
  },
  {
    menu: "My Tasks",
    path: "/tasks",
    component: Pages.MyTasks,
    isMenu: true,
  },
];
