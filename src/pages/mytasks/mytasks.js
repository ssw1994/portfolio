import React, { useEffect, useState } from "react";
import { PageWrapper } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllTasks,
  openEditTask,
} from "../../store/dispatchers/task.dispatch";
import { allTasks } from "../../store/selectors/task.selector";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  IconButton,
  ICONS,
} from "../../components/shared";
import AddTask from "./addTask";
import "./mytasks.scss";
import { AllTaskStatus } from "../../modals/common.model";
function MyTasks() {
  let tasks = useSelector(allTasks);
  const dispatch = useDispatch();

  const editTask = (task) => {
    tasks = tasks.map((t) => {
      if (t._id === task._id) {
        return {
          ...t,
          isEdit: true,
        };
      }
      return t;
    });
  };

  const taskCard = (task, key) => {
    if (task.isEdit) {
      return <AddTask taskDetails={task} />;
    }
    return (
      <Card key={key} className="task_card">
        <div className="task_header">
          <CardHeader title={task.title}></CardHeader>
          <CardActions>
            <IconButton>
              <ICONS.Edit onClick={(e) => dispatch(openEditTask(task))} />
            </IconButton>
            <IconButton>
              <ICONS.Delete />
            </IconButton>
          </CardActions>
        </div>
        <CardContent>
          <div>{task.description}</div>
          <div>{task.status}</div>
        </CardContent>
      </Card>
    );
  };

  useEffect(() => {
    dispatch(getAllTasks());
  }, []);

  return (
    <div className="tasks_buckets">
      <div className="open_tasks">
        {tasks
          .filter((t) => t.status === AllTaskStatus.open)
          .map((t, i) => taskCard(t, i))}
      </div>
      <div className="inprogress_tasks">
        {tasks
          .filter((t) => t.status === AllTaskStatus.inprogress)
          .map((t, i) => taskCard(t, i))}
      </div>
      <div className="closed_tasks">
        {tasks
          .filter((t) => t.status === AllTaskStatus.done)
          .map((t, i) => taskCard(t, i))}
      </div>
    </div>
  );
}

export default PageWrapper(MyTasks);
