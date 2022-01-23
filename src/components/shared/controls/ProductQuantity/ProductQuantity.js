import React from "react";
import { ICONS, IconButton } from "../..";
import { useDispatch } from "react-redux";
import { updateQuantity } from "../../../../store/dispatchers/product.dispatch";
export default function ProductQuantity({ product }) {
  const dispatch = useDispatch();
  const incQuantity = () => {
    dispatch(updateQuantity({cartItemId:product._id ,quantity:product.quantity + 1}))
  };

  const dncQuantity = () => {
    dispatch(updateQuantity({cartItemId:product._id ,quantity:product.quantity - 1}))

  };

  return (
    <div>
       <IconButton onClick={dncQuantity} disabled={product.quantity === 1}>
        <ICONS.RemoveIcon />
      </IconButton>
      {product.quantity}
      <IconButton onClick={incQuantity}>
        <ICONS.Add />
      </IconButton>
    </div>
  );
}
