import React from "react";
import { products } from "../../../store/selectors/shop.selector";
import { fetchProducts } from "../../../store/dispatchers/product.dispatch";
import Product from "../Product/Product";
import { useSelector, useDispatch } from "react-redux";
import "./ProductList.scss";
export default function ProductList() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const productList = useSelector(products);

  return (
    <div className="product_list">
      {productList.map((product, index) => (
        <Product key={index} item={product} />
      ))}
    </div>
  );
}
