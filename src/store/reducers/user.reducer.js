import * as USER_ACTIONS from "../actions/user.action";
import { CommonModel } from "../../modals";
const initialState = {
  isLoggedIn: CommonModel.Status.none,
  isIntroFetched: CommonModel.Status.none,
  introDetails: null,
  userDetails: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case USER_ACTIONS.LOGGING_IN:
      return {
        ...state,
        isLoggedIn: CommonModel.Status.busy,
      };
    case USER_ACTIONS.LOGGED_IN:
      return {
        ...state,
        isLoggedIn: CommonModel.Status.success,
      };
    case USER_ACTIONS.LOGIN_FAILURE:
      return {
        ...state,
        isLoggedIn: CommonModel.Status.error,
      };
    case USER_ACTIONS.FETCH_INTRO:
      return {
        ...state,
        isIntroFetched: CommonModel.Status.busy,
      };
    case USER_ACTIONS.FETCHED_INTRO:
      return {
        ...state,
        isIntroFetched: CommonModel.Status.success,
        introDetails: action.payload,
      };
    case USER_ACTIONS.INTRO_ERROR:
      return {
        ...state,
        isIntroFetched: CommonModel.Status.error,
        introDetails: null,
      };
    default:
      return { ...state };
  }
}
