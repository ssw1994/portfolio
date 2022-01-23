import http from ".";
import { API_ENDPOINTS } from "../modals/common.model";

export default (function () {
  const getBlogs = () => {
    return http.get(API_ENDPOINTS.get_blogs);
  };

  return {
    getBlogs,
  };
})();
