import Http from "./http.handler";

export default (() => {
  const getAllTasks = function (payload = null) {
    return Http.get("/tasks");
  };

  return {
    getAllTasks,
  };
})();
