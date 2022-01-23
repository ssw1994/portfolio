import { Status } from "../../modals/common.model";

export const allTasks = (state) => state.taskState.tasks.data;

export const taskAdded = (state) =>
  state.taskState.lastAdded.status === Status.success;
