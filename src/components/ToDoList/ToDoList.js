import React, { useState, useEffect } from "react";
import ToDoItem from "../ToDoItem/ToDoItem";
import styles from './ToDoList.module.css';
import ToDoItemAdd from '../ToDoItemAdd/ToDoItemAdd';

const ToDoList = () => {
  const [todoData, setTodoData] = useState(() => {
    const saved = localStorage.getItem("todos");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  const changedCheckedTodos = (id, checkedInpt) => {
    let indexTodos = todoData.map(elem => elem.title).indexOf(id);
    
    setTodoData(state => {
      let [...stateTodos] = state;
      stateTodos[indexTodos].checked = checkedInpt
      return stateTodos
    })
  }

  const changedDeleteTodos = id => {
    let indexTodos = todoData.map(elem => elem.title).indexOf(id);

    setTodoData(state => {
      let [...stateTodos] = state;
      stateTodos.splice(indexTodos, 1);
      return stateTodos;
    })
  }

  const activeTodos = todoData.filter(elem => elem.checked === false)
  const checkedTodos = todoData.filter(elem => elem.checked === true)

  const todosItems = [...activeTodos,...checkedTodos].map((elem, index) => {
    return (
      <ToDoItem
        key={elem.title}
        title={elem.title}
        checked={elem.checked}
        checkedChange={changedCheckedTodos}
        deleteChange={changedDeleteTodos}
      />
    )
  })

  useEffect(() => {
    let localJsonTodos = JSON.stringify(todoData);
    localStorage.setItem("todos", localJsonTodos);
  }, [todoData])

  return (
    <div className={styles.todo_items}>
      <ToDoItemAdd
        func={val => {
          val && setTodoData(todoData => [...todoData, {title: val, checked: false}])
        }}
      />
      {todosItems}
    </div>
  )
}

export default ToDoList;