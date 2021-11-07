import Http from ".";
import { API_ENDPOINTS } from "../modals/common.model";

export default (function () {
  const getBlogs = () => {
    return Http({ method: "GET", url: API_ENDPOINTS.get_blogs });
  };

  return {
    getBlogs,
  };
})();
