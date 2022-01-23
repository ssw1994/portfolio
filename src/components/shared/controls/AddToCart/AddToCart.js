import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../../store/dispatchers/product.dispatch";
import { isAddingToCart } from "../../../../store/selectors/shop.selector";
import { Button, ICONS } from "../..";
export default function AddToCart({ productId }) {
  const dispatch = useDispatch();
  const isAdding = useSelector(isAddingToCart);
  const add = () => {
    dispatch(addToCart(productId));
  };

  return (
    <Button disabled={isAdding} onClick={add}>
      Add To Cart &nbsp;
      <ICONS.ShoppingBasket />
    </Button>
  );
}
