import { CommonModel } from "../../modals";
const { Status } = CommonModel;

export const isLoggedIn = (state) =>
  state.userState.isLoggedIn === Status.success;
export const isLoggedOut = (state) => state.userState.isLoggedIn !== Status.success;
export const isRegistered = (state) => state.userState.registeredIn === Status.success;

export const loggedInUserDetails = (state) =>
  state.userState.user ? state.userState.user : {};
