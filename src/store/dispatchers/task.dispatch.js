import * as taskActions from "../actions/task.action";
import taskservice from "../../services/task.service";
export function getAllTasks(payload) {
  return (dispatch) => {
    dispatch({ type: taskActions.GET_TASKS });
    taskservice
      .getAllTasks()
      .then((response) => {
        console.log(response.data.tasks);
        dispatch({
          type: taskActions.GET_TASKS_SUCCESS,
          payload: response.data[0].tasks,
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

export function resetLastAddedStatus(task) {
  return (dispatch) => dispatch({ type: taskActions.RESET_LAST_ADDED_STATUS });
}

export function saveTask(payload) {
  return (dispatch) => {
    dispatch({ type: taskActions.CREATE_TASK });
    taskservice
      .saveTask(payload)
      .then((response) => {
        if (response.status === 201) {
          dispatch({ type: taskActions.CREATE_TASK_SUCCESS });
          dispatch(getAllTasks());
        } else {
          dispatch(dispatch({ type: taskActions.CREATE_TASK_FAILURE }));
        }
      })
      .catch((error) => {
        dispatch(dispatch({ type: taskActions.CREATE_TASK_FAILURE }));
      });
  };
}
