import React from "react";
import style from './Header.module.css';
import ToDoList from '../ToDoList/ToDoList';
import Home from "../Home/Home";
import NotFound from "../NotFound/NotFound";
import { Routes, Route, Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.links}>
        <Link to="/">Home</Link>
        <Link to="/todolist">Todolist</Link>
        <Link to="/project">Project</Link>
      </div>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/todolist" index element={<ToDoList />} />
        <Route path="/project" element={<div><h1>Project</h1></div>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </header>
  )
}

export default Header;