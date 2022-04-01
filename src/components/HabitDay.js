import React from 'react';

export default function HabitDay({ habitDay, completeHabit }) {
  // TODO: refactor naming, its getting confusing
  function handleDayClick() {
    completeHabit(habitDay.id)
  }
  return (
    <td>
      <button disabled={isNaN(parseInt(habitDay.day))} onClick={handleDayClick} className={
        habitDay.tracked ? "tracked" : "untracked" }>{habitDay.day}</button>
    </td>
  );
}
