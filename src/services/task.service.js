import http from "./http.handler";

export default (() => {
  const getAllTasks = function (payload = null) {
    return http.get("/tasks");
  };

  const saveTask = function (payload) {
    return http.post("/tasks", payload);
  };

  return {
    getAllTasks,
    saveTask,
  };
})();
