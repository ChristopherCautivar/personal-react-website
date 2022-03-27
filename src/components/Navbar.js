import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <span>
        <Link to="/">Home</Link>{" "}|{" "}
        <Link to="/todolist">Todo List</Link>{" "}|{" "}
        <Link to="/habittracker">Habit Tracker</Link>
      </span>
    </nav>
  );
}
