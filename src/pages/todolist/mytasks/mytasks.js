import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllTasks,
  // openEditTask,
} from "../../../store/dispatchers/task.dispatch";
import { allTasks } from "../../../store/selectors/task.selector";
import "./mytasks.scss";
import { AllTaskStatus } from "../../../modals/common.model";
import TaskList from "./taskList";
export default function MyTasks() {
  let tasks = useSelector(allTasks);
  const dispatch = useDispatch();

  useEffect(() => {
    if (dispatch) {
      dispatch(getAllTasks());
    }
  }, [dispatch]);

  return (
      <div className="tasks_buckets">
        <div className="open_tasks">
          <TaskList list={tasks} status={AllTaskStatus.open} />
        </div>
        <div className="inprogress_tasks">
          <TaskList list={tasks} status={AllTaskStatus.inprogress} />
        </div>
        <div className="closed_tasks">
          <TaskList list={tasks} status={AllTaskStatus.done} />
        </div>
      </div>
  );
}
