import { Checkbox, Typography } from "../../../components/shared";
import { AllTaskStatus } from "../../../modals/common.model";
import AddTask from "./addTask";
import "./mytasks.scss";
export default function TaskList({ list, status }) {
  return (
    <ul className="task_list">
      {list
        ?.filter((task) => task.status === status)
        .map((task) => {
          return (
            <li>
              <Checkbox
                color="primary"
                checked={!!(task.status === AllTaskStatus.done)}
                indeterminate={task.status === AllTaskStatus.inprogress}
              />

              <div>
                <div>
                  <Typography variant="h5">{task.title}</Typography>
                </div>
                <div>
                  <Typography variant="h6">{task.description}</Typography>
                </div>
              </div>
            </li>
          );
        })}
      {status === AllTaskStatus.open ? (
        <li className="add-task-action-menu">
          <AddTask />
        </li>
      ) : null}
    </ul>
  );
}
