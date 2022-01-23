import * as productActions from "../actions/product.action";
import productService from "../../services/product.service";
export function fetchProducts() {
  return async (dispatch) => {
    dispatch({ type: productActions.FETCH_PRODUCTS });
    try {
      const response = await productService.fetch_products();
      if (response.status === 200) {
        dispatch({
          type: productActions.FETCH_PRODUCTS_SUCCESS,
          payload: response.data,
        });
      } else {
        dispatch({ type: productActions.FETCH_PRODUCTS_FAILURE });
      }
    } catch (error) {
      dispatch({
        type: productActions.FETCH_PRODUCTS_FAILURE,
      });
    }
  };
}

export function addToCart(productId) {
  return async (dispatch) => {
    dispatch({ type: productActions.ADD_TO_CART });
    try {
      const response = await productService.addToCart(productId);
      if (response.status === 200) {
        dispatch({ type: productActions.ADD_TO_CART_SUCCESS });
        dispatch(fetchCartsItems());
      } else {
        dispatch({ type: productActions.ADD_TO_CART_FAILURE });
      }
    } catch (error) {
      dispatch({ type: productActions.ADD_TO_CART_FAILURE });
    }
  };
}

export function fetchCartsItems() {
  return async (dispatch) => {
    dispatch({ type: productActions.FETCH_CART });
    try {
      const response = await productService.fetchCartItems();
      dispatch({
        type: productActions.FETCH_CART_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({ type: productActions.FETCH_CART_FAILURE });
    }
  };
}

export function updateQuantity(payload){
  return async (dispatch) => {
    dispatch({type:productActions.UPDATE_QUANTITY});
    const response = await productService.updateQuantity(payload);
    if(response.status === 201){
      dispatch({ type: productActions.UPDATE_QUANTITY_SUCCESS,payload});
    }else{
      dispatch({ type: productActions.UPDATE_QUANTITY_FAILURE})
    }
  }
}

export function removeFromCart(cartItemId){
   return async(dispatch)=>{
     dispatch({type:productActions.REMOVE_FROM_CART});
     const response = await productService.removeFromCart(cartItemId);
     if(response.status=== 200){
       dispatch({type:productActions.REMOVE_FROM_CART_SUCCESS,cartItemId});
     }else{
       dispatch({type:productActions.REMOVE_FROM_CART_FAILURE})
     }
   }
}
