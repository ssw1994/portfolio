import * as USER_ACTIONS from "../actions/user.action";
import produce from "immer";
import { CommonModel } from "../../modals";
const { Status } = CommonModel;

const initialState = {
  isLoggedIn: CommonModel.Status.none,
  isIntroFetched: CommonModel.Status.none,
  introDetails: null,
  user: null,

  registeredIn: CommonModel.Status.none,
  actions: {
    user: CommonModel.Status.none,
  },
};

export default produce((state, action) => {
  switch (action.type) {
    case USER_ACTIONS.LOGGING_IN:
      state.isLoggedIn = Status.busy;
      break;
    case USER_ACTIONS.LOGGED_IN:
      state.isLoggedIn = Status.success;
      break;
    case USER_ACTIONS.LOGIN_FAILURE:
      state.isLoggedIn = Status.error;
      break;
    case USER_ACTIONS.FETCH_INTRO:
      state.isIntroFetched = Status.busy;
      break;
    case USER_ACTIONS.FETCHED_INTRO:
      state.isIntroFetched = Status.success;
      state.introDetails = action.payload;
      break;
    case USER_ACTIONS.INTRO_ERROR:
      state.isIntroFetched = Status.error;
      state.introDetails = null;
      break;
    case USER_ACTIONS.SIGN_UP:
      return { ...state, registeredIn: CommonModel.Status.busy };
    case USER_ACTIONS.SIGN_UP_SUCCESS:
      return { ...state, registeredIn: CommonModel.Status.success };
    case USER_ACTIONS.SIGN_UP_FAILURE:
      return { ...state, registeredIn: CommonModel.Status.error };

    case USER_ACTIONS.FETCH_LOGGED_IN_USER_DETAILS:
      state.actions.user = CommonModel.Status.busy;
      break;
    case USER_ACTIONS.FETCH_LOGGED_IN_USER_DETAILS_SUCCESS:
      state.user = action.payload;
      state.actions.user = CommonModel.Status.success;
      break;
    case USER_ACTIONS.FETCH_LOGGED_IN_USER_DETAILS_FAILURE:
      state.actions.user = CommonModel.Status.error;
      break;
    case USER_ACTIONS.LOG_OUT:
      state.isLoggedIn = CommonModel.Status.none;
      break;
    default:
      return { ...state };
  }
}, initialState);
