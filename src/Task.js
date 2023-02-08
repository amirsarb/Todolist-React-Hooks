/**
 * @author Amir Sarbazi
 * @email [amir.sarbazi@gmail.com]
 * @create date 2023-02-08
 * @desc [This is a TodoList in React Hooks]
 */
import { ListItemSecondaryAction, ListItemText } from "@mui/material";
import React from "react";
import useToggle from "./Hooks/useToggle";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import TaskEditForm from "./TaskEditForm";

function Task({ item, deleteTask, toggleTask, editTask }) {
  const [showEdit, setToggle] = useToggle(false);
  //const [taskName, handleTaskNameChange] = useInput(item.taskName);

  const handleDelete = () => {
    deleteTask(item);
  };

  const handleToggle = () => {
    toggleTask(item);
  };

  const handleEdit = () => {
    //This function can (show / hide) the edit form
    setToggle();
  };

  return (
    <ListItem>
      <Checkbox tabIndex={-1} checked={item.finished} onClick={handleToggle} />
      <ListItemText
        style={{
          cursor: "context-menu",
          textDecoration: item.finished ? "line-through" : "none",
        }}
      >
        {" "}
        {!showEdit ? (
          item.taskName
        ) : (
          <TaskEditForm
            editTask={editTask}
            handleEdit={handleEdit}
            item={item}
            showEdit={showEdit}
          />
        )}
      </ListItemText>

      <ListItemSecondaryAction>
        <IconButton>
          <EditIcon onClick={handleEdit} />
        </IconButton>
        <IconButton>
          <DeleteIcon onClick={handleDelete} />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default Task;
