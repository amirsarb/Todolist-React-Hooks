/**
 * @author Amir Sarbazi
 * @email [amir.sarbazi@gmail.com]
 * @create date 2023-02-08
 * @desc [This is a TodoList in React Hooks]
 */
import React from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Task from "./Task";

function TaskList(props) {
  // console.log(props.deleteTask);
  return (
    <Paper>
      <List>
        {props.tasks.map((t) => (
          <>
            <Task
              item={t}
              key={t.id}
              deleteTask={props.deleteTask}
              toggleTask={props.toggleTask}
              editTask={props.editTask}
            />
            <Divider />
          </>
        ))}
      </List>
    </Paper>
  );
}

export default TaskList;
