import {
  Card,
  CardContent,
  CardActions,
  Select,
  MenuItem,
  FormControl,
  TextField,
  Button,
  ICONS,
  IconButton,
} from "../../../components/shared";
import { AllTaskStatus } from "../../../modals/common.model";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  closeEditTask,
  saveTask,
} from "../../../store/dispatchers/task.dispatch";
import { taskAdded } from "../../../store/selectors/task.selector";
import { useSelector } from "react-redux";
export default function AddTask({ taskDetails }) {
  const dispatch = useDispatch();
  const taskAddedSuccessfully = useSelector(taskAdded);
  const initialTaskDetails = {
    _id: 0,
    status: AllTaskStatus.open,
    description: "",
    tile: "",
    ...taskDetails,
  };
  const [task, setTask] = useState(initialTaskDetails);
  const [isOpen, setOpen] = useState(false);

  const allStaus = AllTaskStatus;
  const saveNewTask = () => {
    const payload = {
      title: task.title,
      description: task.description,
    };
    dispatch(saveTask(payload));
  };

  useEffect(() => {
    if (taskAddedSuccessfully) {
      setTask({
        description: "",
        title: "",
      });
    }
  }, [taskAddedSuccessfully]);

  const statusChange = (event) => {
    setTask({ ...task, status: event.target.value });
  };

  const updateTitle = (event) => {
    setTask({ ...task, title: event.target.value });
  };

  const updateDescription = (event) => {
    setTask({ ...task, description: event.target.value });
  };

  const description = (
    <div className="description-input">
      <FormControl>
        <TextField
          label="Description"
          id="desc"
          maxRows={4}
          minRows={4}
          multiline
          value={task.description}
          onChange={(e) => updateDescription(e)}
          required
        ></TextField>
      </FormControl>
    </div>
  );

  const status = (
    <div>
      <Select
        id="status"
        label="Task Status"
        labelId="status"
        name="status"
        value={task.status}
        onChange={(e) => statusChange(e)}
      >
        {Object.values(allStaus).map((taskStatus) => {
          return (
            <MenuItem key={taskStatus} value={taskStatus}>
              {taskStatus}
            </MenuItem>
          );
        })}
      </Select>
    </div>
  );

  const title = (
    <div>
      <FormControl>
        <TextField
          label="Task Title"
          value={task.title}
          onChange={(e) => updateTitle(e)}
          id="title"
        ></TextField>
      </FormControl>
    </div>
  );

  const closeTask = () => {
    if (task._id) {
      dispatch(closeEditTask(task));
    }
    setOpen(false);
  };

  if (!isOpen) {
    return (
      <div className="add-task-container">
        <IconButton
          onClick={() => setOpen(true)}
          variant="outlined"
          color="primary"
        >
          <ICONS.Add />
        </IconButton>
      </div>
    );
  } else {
    return (
      <Card className="task_add_card">
        <CardContent>
          {title}
          {task._id ? status : null}
          {description}
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => saveNewTask()}
          >
            Save
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={(e) => closeTask()}
          >
            Cancel
          </Button>
        </CardActions>
      </Card>
    );
  }
}
