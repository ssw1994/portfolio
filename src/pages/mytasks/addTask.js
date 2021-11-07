import {
  Card,
  CardContent,
  CardActions,
  Select,
  MenuItem,
  FormControl,
  TextField,
  Button,
} from "../../components/shared";
import { AllTaskStatus } from "../../modals/common.model";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { closeEditTask } from "../../store/dispatchers/task.dispatch";
export default function AddTask({ taskDetails }) {
  const dispatch = useDispatch();
  const [task, setTask] = useState({
    _id: 0,
    status: "",
    description: "",
    tile: "",
    ...taskDetails,
  });
  const allStaus = AllTaskStatus;
  const saveTask = () => {};

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
  };

  return (
    <Card>
      <CardContent>
        {title}
        {status}
        {description}
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary" onClick={(e) => saveTask()}>
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
