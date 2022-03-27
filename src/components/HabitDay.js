import React from 'react';
import './HabitDay.css'

export default function HabitDay({ habitDay, completeHabit }) {
  // TODO: refactor naming, its getting confusing
  function handleDayClick() {
    completeHabit(habitDay.id)
  }
  return (
    <td>
        <button disabled={!Boolean(habitDay.day)} onClick={handleDayClick} className={
          habitDay.tracked ? "tracked" : "untracked" }>{habitDay.day}</button>
    </td>
  );
}
