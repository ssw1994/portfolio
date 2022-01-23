import React from "react";
import { Routes, Route } from "react-router-dom";
import { Auth } from "../pages";
import AllApps from "../pages/Apps/AllApps";
import { Blogger, Shop, TodoList } from "../pages/Apps";
import { Outlet } from "react-router-dom";
export default function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Auth />}></Route>
        <Route path="/auth" element={<Auth />}></Route>
        <Route path="/apps" element={<AllApps />}></Route>
        <Route path="/blogger/*" element={<Blogger />}></Route>
        <Route path="/todoList/*" element={<TodoList />}></Route>
        <Route path="/shop/*" element={<Shop />}></Route>

        {/* <Auth path="/">
        <Auth path="/auth" />
        <Blogger path="/blogger" />
        <Shop path="/shop" />
        <TodoList path="/todolist" />
      </Auth> */}
      </Routes>
      <Outlet />
    </>
  );
}
