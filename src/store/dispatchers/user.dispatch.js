import * as USER_ACTIONS from "../actions/user.action";
import userservice from "../../services/user.service";
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
