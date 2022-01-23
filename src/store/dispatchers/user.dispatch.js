import * as USER_ACTIONS from "../actions/user.action";
import userservice from "../../services/user.service";
import { Cookie } from "../../services";
import userService from "../../services/user.service";
export function fetchIntro(payload) {
  return (dispatch) => {
    dispatch({ type: USER_ACTIONS.FETCH_INTRO });
    userservice
      .getIntro(payload)
      .then((response) =>
        dispatch({ type: USER_ACTIONS.FETCHED_INTRO, payload: response.data })
      )
      .catch((error) => dispatch({ type: USER_ACTIONS.INTRO_ERROR }));
  };
}

export function signMeIn(payload) {
  return (dispatch) => {
    dispatch({ type: USER_ACTIONS.LOGGING_IN });
    userservice
      .signIn(payload)
      .then((response) => {
        Cookie.setCookie("token", response.data.accessToken);
        dispatch({ type: USER_ACTIONS.LOGGED_IN });
      })
      .catch((error) => {
        dispatch({ type: USER_ACTIONS.LOGIN_FAILURE });
      });
  };
}

export function signMeUp(payload) {
  return (dispatch) => {
    dispatch({ type: USER_ACTIONS.SIGN_UP });
    userservice
      .signUp(payload)
      .then((response) => {
        if (response.status === 201) {
          dispatch({ type: USER_ACTIONS.SIGN_UP_SUCCESS });
        } else {
          dispatch({ type: USER_ACTIONS.SIGN_UP_FAILURE });
        }
      })
      .catch((error) => {
        dispatch({ type: USER_ACTIONS.SIGN_UP_FAILURE });
      });
  };
}

export function fetchLoggedInUserDetails(payload) {
  return (dispatch) => {
    dispatch({ type: USER_ACTIONS.FETCH_LOGGED_IN_USER_DETAILS });
    userService
      .getLoggedInUserDetails()
      .then((response) => {
        if (response.status === 200) {
          console.log(response);
          dispatch({
            type: USER_ACTIONS.FETCH_LOGGED_IN_USER_DETAILS_SUCCESS,
            payload: response.data,
          });
        } else {
          dispatch({ type: USER_ACTIONS.FETCH_LOGGED_IN_USER_DETAILS_FAILURE });
        }
      })
      .catch((error) => {
        dispatch({
          type: USER_ACTIONS.FETCH_LOGGED_IN_USER_DETAILS_FAILURE,
        });
      });
  };
}

export function logout() {
  return (dispatch) => {
    dispatch({ type: USER_ACTIONS.LOG_OUT });
  };
}
