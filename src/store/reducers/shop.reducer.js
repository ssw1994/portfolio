import produce from "immer";
import { Status } from "../../modals/common.model";
import * as productActions from "../actions/product.action";
const initialProductState = {
  products: [],
  cart: [],
  orders: [],
  actions: {
    products: Status.none,
    cart: Status.none,
    orders: Status.none,
    create: Status.none,
    cartItems: Status.none,
    quantityUpdate:Status.none,
    removeFromCart:Status.none
  },
};
export default produce(function(state, action){
  switch (action.type) {
    case productActions.FETCH_PRODUCTS:
      state.actions.products = Status.busy;
      break;
    case productActions.FETCH_PRODUCTS_SUCCESS:
      state.actions.products = Status.success;
      state.products = action.payload;
      break;
    case productActions.FETCH_PRODUCTS_FAILURE:
      state.actions.products = Status.error;
      break;
    case productActions.CREATE_PRODUCT:
      state.actions.create = Status.busy;
      break;
    case productActions.CREATE_PRODUCT_SUCCESS:
      state.actions.create = Status.success;
      break;
    case productActions.CREATE_PRODUCT_FAILURE:
      state.actions.create = Status.error;
      break;
    case productActions.ADD_TO_CART:
      state.actions.cart = Status.busy;
      break;
    case productActions.ADD_TO_CART_SUCCESS:
      state.actions.cart = Status.success;
      break;
    case productActions.ADD_TO_CART_FAILURE:
      state.actions.cart = Status.error;
      break;
    case productActions.FETCH_CART:
      state.actions.cartItems = Status.busy;
      break;
    case productActions.FETCH_CART_SUCCESS:
      state.actions.cartItems = Status.success;
      state.cart = action.payload;
      break;
    case productActions.FETCH_CART_FAILURE:
      state.actions.cartItems = Status.error;
      break;
    case productActions.UPDATE_QUANTITY:
      state.actions.quantityUpdate = Status.busy;
      break;
    case productActions.UPDATE_QUANTITY_SUCCESS:{
      let index = state.cart.findIndex((x)=>x._id === action.payload.cartItemId);
      if(index >=0){
        state.cart[index].quantity = action.payload.quantity;
      }
      state.actions.quantityUpdate = Status.success;
    }
      break;
    case productActions.UPDATE_QUANTITY_FAILURE:
      state.actions.quantityUpdate = Status.error;
      break;

    case productActions.REMOVE_FROM_CART:
      state.actions.removeFromCart = Status.busy;
      break;
    case productActions.REMOVE_FROM_CART_SUCCESS:{
      let index = state.cart.findIndex((x)=>x._id === action.cartItemId);
      if(index >= 0) state.cart.splice(index,1);
      state.actions.removeFromCart = Status.success;
    }
      break;
    case productActions.REMOVE_FROM_CART_FAILURE:
      state.actions.removeFromCart = Status.error;
      break;
    default:
      return { ...state };
  }
}, initialProductState);
