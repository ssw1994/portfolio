import { Status } from "../../modals/common.model";
export const products = (state) => state.shopState.products;

export const isAddingToCart = (state) =>
  state.shopState.actions.cart === Status.busy;

export const cartItems = (state) => state.shopState.cart;

export const orderTotal = (state) =>
  state.shopState.cart.reduce((sum, item) => {
    return sum + item.quantity * item.product_price;
  }, 0);
