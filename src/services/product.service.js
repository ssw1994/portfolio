import http from ".";
import { API_ENDPOINTS } from "../modals/common.model";
export default (function () {
  const fetch_products = () => {
    return http.get(API_ENDPOINTS.fetch_products);
  };
  const addToCart = (productId) => {
    return http.patch(
      API_ENDPOINTS.add_to_cart.replace("{productId}", productId)
    );
  };

  const fetchCartItems = () => {
    return http.get(API_ENDPOINTS.fetch_cart_items);
  };

  const updateQuantity=(payload)=>{
    return http.post(API_ENDPOINTS.update_quantity, payload)
  }

  const removeFromCart = (cartItemId)=>{
    return http.delete(API_ENDPOINTS.remove_from_cart.replace("{cartItemId}",cartItemId));
  }
  return {
    fetch_products,
    addToCart,
    fetchCartItems,
    updateQuantity,
    removeFromCart
  };
})();
