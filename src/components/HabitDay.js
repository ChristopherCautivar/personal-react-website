import React from 'react';
import './HabitDay.css'

export default function HabitDay({ day, tracked, completeHabit }) {
  return (
    <td>
        <button disabled={!Boolean(day)} onClick={completeHabit} className={
          tracked ? "tracked" : "untracked" }>{day}</button>
    </td>
  );
}
