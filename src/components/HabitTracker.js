import React, { useState, useRef, useEffect} from 'react';
import HabitCalendar from './HabitCalendar';
import './HabitTracker.css'

export default function HabitTracker() {
  const habitMonth = useRef()
  const habitName = useRef()
  const [monthTouched, setMTouched] = useState(0)
  const [habits, setHabits] = useState(["this habit"])

  // a habit "object" will have a name, a calendar, and an id
  // a calendar "object" will have a month-year name, and days
  // a day "object" will have a number and the state of the habit

  function handleAddHabit(e){
    const name = habitName.current.value
    if (name === '') return
    setHabits(prevHabits => [...prevHabits, name])
    habitName.current.value = null
  }

  return (
      <div className='Component'>
        <input ref={habitMonth} type="month" onChange={()=>{setMTouched((monthTouched%2)+1)}}/>
        {" "}
        <select>
          {habits.map(habit=><option>{habit}</option>)}
        </select>
        {" "}
        <input ref={habitName} type="text"/>
        <button onClick={handleAddHabit}>Add Habit</button>
        {monthTouched ?
         <HabitCalendar monthSelected={habitMonth.current.value}/> :
          <div>Choose a month and a habit to start!</div>}
      </div>
  );
}
