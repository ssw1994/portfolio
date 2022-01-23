import http from ".";
import { API_ENDPOINTS } from "../modals/common.model";

export default (function () {
  const getIntro = function (payload) {
    return http.get(API_ENDPOINTS.get_user_details);
  };

  const signIn = function (payload) {
    console.log(http);

    return http.post(API_ENDPOINTS.signIn, payload);
  };
  const signUp = function (payload) {
    console.log(http);
    return http.post(API_ENDPOINTS.signUp, payload);
  };

  const getLoggedInUserDetails = function () {
    return http.get(API_ENDPOINTS.get_user_details);
  };
  return {
    getIntro,
    signIn,
    signUp,
    getLoggedInUserDetails,
  };
})();
