/**
 * @author Amir Sarbazi
 * @email [amir.sarbazi@gmail.com]
 * @create date 2023-02-08
 * @desc [This is a TodoList in React Hooks]
 */
import React from "react";
import useInput from "./Hooks/useInput";
import { TextField } from "@mui/material";

function TaskEditForm(props) {
  const [taskName, handleTaskNameChange] = useInput(props.item.taskName);

  return (
    <form
      style={{
        display: !props.showEdit && "none",
        marginLeft: "1rem",
        width: "50%",
      }}
      onSubmit={(e) => {
        e.preventDefault();
        props.editTask(props.item.id, taskName);
        props.handleEdit();
      }}
    >
      <TextField
        sx={{ width: "100%" }}
        onChange={handleTaskNameChange}
        value={taskName}
        id="editTask"
        label="Edit Task Name"
        variant="outlined"
        fullWidth
        autoFocus
      />
    </form>
  );
}
export default TaskEditForm;
