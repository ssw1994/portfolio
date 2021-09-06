import Http from ".";
import { API_ENDPOINTS } from "../modals/common.model";

export default (function () {
  const getIntro = function (payload) {
    return Http({ method: "GET", url: API_ENDPOINTS.get_user_details });
  };

  return {
    getIntro,
  };
})();
