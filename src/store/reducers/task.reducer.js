import { Status } from "../../modals/common.model";
import * as taskAction from "../actions/task.action";
const initialState = {
  tasks: { data: [], status: Status.none },
  lastAdded: { data: null, status: Status.none },
  lastDeleted: { data: null, status: Status.none },
  lastUpdated: { data: null, status: Status.none },
};
export default function taskReducer(state = initialState, action) {
  switch (action.type) {
    case taskAction.GET_TASKS:
      return {
        ...state,
        tasks: {
          ...state.tasks,
          status: Status.busy,
        },
      };
    case taskAction.GET_TASKS_SUCCESS:
      return {
        ...state,
        tasks: {
          ...state.tasks,
          data: action.payload,
          status: Status.success,
        },
      };
    case taskAction.GET_TASKS_FAILURE:
      return {
        ...state,
        tasks: {
          ...state.tasks,
          status: Status.error,
        },
      };
    case taskAction.OPEN_EDIT_TASK: {
      let _tasks = state.tasks.data.map((t) => {
        if (t._id === action.task._id) {
          return {
            ...t,
            isEdit: true,
          };
        }
        return t;
      });
      return {
        ...state,
        tasks: {
          ...state.tasks,
          data: _tasks,
        },
      };
    }
    case taskAction.CLOSE_EDIT_TASK:
      let _tasks = state.tasks.data.map((t) => {
        if (t._id === action.task._id) {
          return {
            ...t,
            isEdit: false,
          };
        }
        return t;
      });
      return {
        ...state,
        tasks: {
          ...state.tasks,
          data: _tasks,
        },
      };
    default:
      return { ...state };
  }
}
