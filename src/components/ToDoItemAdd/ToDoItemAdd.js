import React from "react";
import styles from './ToDoItemAdd.module.css'

const ToDoItemAdd = props => {
  const keyEnter = event => {
    if(event.key === 'Enter') {
      props.func(event.target.value)
      event.target.value = ''
    }
  }
  return (
    <div className={styles["input-inner"]}>
      <h1>ToDoList</h1>
      <input
        type="text"
        placeholder="Text todos"
        onKeyDown={event => keyEnter(event)}
      />
    </div>
  )
}

export default ToDoItemAdd;