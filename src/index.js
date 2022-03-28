import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header';
// import ToDoList from './components/ToDoList/ToDoList';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
    </BrowserRouter>
    
    {/* <ToDoList /> */}
  </React.StrictMode>,
  document.getElementById('main')
);
