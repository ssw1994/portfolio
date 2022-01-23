import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";

import ProductList from "./ProductList/ProductList";
import Cart from "./Cart/Cart";
import { fetchCartsItems } from "../../store/dispatchers/product.dispatch";
import { useDispatch } from "react-redux";
import ProductCreate from "./ProductCreate/ProductCreate";
export default function Shop() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchCartsItems());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<ProductList />}></Route>
        <Route path="products" element={<ProductList />}></Route>
        <Route path="/product/create" element={<ProductCreate />}></Route>
        <Route path="cart" element={<Cart />}></Route>
      </Route>
    </Routes>
  );
}
