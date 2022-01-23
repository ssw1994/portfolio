import { ICONS } from "../components/shared";
export const Status = {
  busy: "busy",
  success: "success",
  error: "error",
  none: "none",
};

export const Api = {
  baseUrl: "./mocks/",
};

export const API_ENDPOINTS = {
  get_user_details: "/user/",
  get_blogs: "blog.mock.json",
  signIn: "/auth/signin",
  signUp: "/auth/signup",
  fetch_products: "/products/",
  add_to_cart: "/carts/add/{productId}",
  fetch_cart_items: "/carts",
  update_quantity:"/carts/update/quantity",
  remove_from_cart:"/carts/delete/{cartItemId}"
};

export const AppNames = {
  blogger: "Blogger",
  todolist: "TodoList",
  shop: "Shop",
};

export const Apps = [
  { name: AppNames.todolist, path: "/todoList", icon: ICONS.Work },
  { name: AppNames.blogger, path: "/blogger", icon: ICONS.LibraryBooks },
  { name: AppNames.shop, path: "/shop", icon: ICONS.ShoppingBasket },
];

export const AllTaskStatus = {
  open: "OPEN",
  inprogress: "IN_PROGRESS",
  done: "DONE",
};

export const DialogTypes = {
  skill: "SKILL",
  project: "PROJECT",
};
