import React, { useState, useRef, useEffect } from 'react';
import HabitCalendar from './HabitCalendar';
import './HabitTracker.css'

export default function HabitTracker() {
  const habitMonth = useRef()
  const habitName = useRef()
  // useState is responsible for triggering rerenders, otherwise habitMonth's useRef would be enough
  // to access and set the variable
  const [calendar, setCalendar] = useState("")
  const [habits, setHabits] = useState(["this habit"])

  // a habit component will have a name, a calendar, and an id
  // { id=uuidv4(), habitName:"", calendar:[cal] }
  // a calendar component will have a month-year name, and days
  // {}
  // a day component will have a number and the state of the habit
  //
  // OR
  // { "month-year":[habits]}
  // { habit:cal }
  // { cal:[tracked]}

  function handleAddHabit(e){
    const name = habitName.current.value
    if (name === '') return
    setHabits(prevHabits => [...prevHabits, name])
    habitName.current.value = null
  }

  return (
      <div className='Component'>
        <input ref={habitMonth} type="month" value={calendar} onChange={
          ()=>setCalendar(habitMonth.current.value)}/>
        {" "}
        <select>
          {habits.map(habit=><option>{habit}</option>)}
        </select>
        {" "}
        <input ref={habitName} type="text"/>
        <button onClick={handleAddHabit}>Add Habit</button>
        {calendar ? <HabitCalendar monthSelected={calendar}/> : <div>Choose a month and a habit to start!</div>}
      </div>
  );
}
