import React from "react";
import "./ToDoItem.css";

const ToDoItem = props => {
  return (
    <div className={props.checked ? 'todo_inner checked' : 'todo_inner'}>
      <label>
        <p>{props.title}</p>
        <input
          type="checkbox"
          className="todo_btn"
          onChange={event => props.checkedChange(props.title, event.target.checked)}
          checked={props.checked}
        />
      </label>
      <button
        onClick={() => props.deleteChange(props.title)}
      >
        delete
      </button>
    </div>
  )
}

export default ToDoItem;