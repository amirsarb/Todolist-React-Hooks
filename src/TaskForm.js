/**
 * @author Amir Sarbazi
 * @email [amir.sarbazi@gmail.com]
 * @create date 2023-02-08
 * @desc [This is a TodoList in React Hooks]
 */
import React from "react";
import useInput from "./Hooks/useInput";
import { TextField, Paper } from "@mui/material";

function TaskForm(props) {
  const [taskName, handleTaskNameChange, handleResetTask] = useInput("");
  return (
    <Paper elevation={3} sx={{ mt: "1rem" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.addTask(taskName);
          handleResetTask();
        }}
      >
        <TextField
          sx={{ width: "100%" }}
          onChange={handleTaskNameChange}
          value={taskName}
          id="outlined-basic"
          label="Enter New Task"
          variant="outlined"
        />
      </form>
    </Paper>
  );
}

export default TaskForm;
