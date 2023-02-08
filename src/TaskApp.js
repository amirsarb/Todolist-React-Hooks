/**
 * @author Amir Sarbazi
 * @email [amir.sarbazi@gmail.com]
 * @create date 2023-02-08
 * @desc [This is a TodoList in React Hooks]
 */

import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import { v4 as uuidv4 } from "uuid";

function Todoapp() {
  const initVal = [
    { id: uuidv4(), taskName: "Do the Ironing", finished: false },
    { id: uuidv4(), taskName: "Do the Washing", finished: true },
    { id: uuidv4(), taskName: "Do the Dishes", finished: false },
  ];
  const defaultVal =
    JSON.parse(window.localStorage.getItem("tasks")) || initVal;
  // This is initial value for tasks {id,taskName,finished}

  const [tasks, setTasks] = useState(defaultVal);

  useEffect(() => {
    window.localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add new task arrow function, this function calls
  // in TaskForm component(onSubmit)
  const addTask = (param) => {
    setTasks([...tasks, { id: uuidv4(), taskName: param, finished: false }]);
  };

  // This arrow function calls in Task component
  // This fucntion pass through to TaskList via props
  // Then pass again through to the Task
  // TaskApp - > TaskList -> Task
  const deleteTask = (param) => {
    const newTaskList = tasks.filter((t) => t.id !== param.id);
    setTasks(newTaskList);
    // Or we can use bellow code
    // setTasks((tasks) => tasks.filter((t) => t.id !== param.id));
  };

  // This function check/uncheck the task
  // and works exactly like delteTask

  const toggleTask = (param) => {
    const newTaskList = tasks.map((t) =>
      t.id === param.id ? { ...t, finished: !t.finished } : t
    );
    setTasks(newTaskList);
  };

  // This function calls in TaskEditForm
  // TaskApp - > TaskList(props) -> Task(props) - > TaskEditForm (onSubmit)
  const editTask = (id, taskName) => {
    const newTaskList = tasks.map((t) =>
      t.id === id ? { ...t, taskName: taskName } : t
    );
    setTasks(newTaskList);
  };

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#eaeaea",
      }}
      elevation={0}
    >
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            Todo List with Hooks
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid sx={{ mt: "1.5rem" }} container justifyContent={"center"}>
        <Grid item xs={12} md={8} lg={4}>
          <TaskList
            tasks={tasks}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
            editTask={editTask}
          />
          <TaskForm addTask={addTask} />
        </Grid>
      </Grid>
      <div style={{ textAlign: "-webkit-center", broderwidth: `100%` }}>
        <h1
          style={{
            borderRadius: "10px",
            border: "2px solid gray",
            width: "300px",
            color: "#1976d2",
            padding: "3px",
          }}
        >
          BY: AMIR SARBAZI
        </h1>
      </div>
    </Paper>
  );
}
export default Todoapp;
