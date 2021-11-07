import * as taskActions from "../actions/task.action";
import taskservice from "../../services/task.service";
export function getAllTasks(payload) {
  return (dispatch) => {
    dispatch({ type: taskActions.GET_TASKS });
    taskservice
      .getAllTasks()
      .then((response) => {
        dispatch({
          type: taskActions.GET_TASKS_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({ type: taskActions.GET_TASKS_FAILURE });
      });
  };
}

export function openEditTask(task) {
  return (dispatch) => dispatch({ type: taskActions.OPEN_EDIT_TASK, task });
}

export function closeEditTask(task) {
  return (dispatch) => dispatch({ type: taskActions.CLOSE_EDIT_TASK, task });
}
