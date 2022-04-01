import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

export default function Navbar() {
  return (
    <span>
    <nav>
      <NavLink className={({isActive}) => "nav-link" + 
        (isActive? " curr-page" : "")} to="/">Home</NavLink>
      <NavLink className={({isActive}) => "nav-link" + 
        (isActive? " curr-page" : "")} to="/todolist">Todo List</NavLink>
      <NavLink className={({isActive}) => "nav-link" + 
        (isActive? " curr-page" : "")} to="/habittracker">
          Habit Tracker</NavLink>
    </nav>
    </span>
  );
}
