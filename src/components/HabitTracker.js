import React, { useState, useRef, useEffect} from 'react';
import HabitCalendar from './HabitCalendar';
import './HabitTracker.css'

export default function HabitTracker() {
  const habitMonth = useRef()
  const habitName = useRef()
  // const [monthTouched, setMTouched] = useState(0)
  const [calendar, setCalendar] = useState(<div>Choose a month and a habit to start!</div>)
  const [habits, setHabits] = useState(["this habit"])

  // a habit "object" will have a name, a calendar, and an id
  // a calendar "object" will have a month-year name, and days
  // a day "object" will have a number and the state of the habit

  // useEffect(() => {
  //   console.log("ya")
  // }, [habitName.current.value])

  function handleAddHabit(e){
    const name = habitName.current.value
    if (name === '') return
    setHabits(prevHabits => [...prevHabits, name])
    habitName.current.value = null
  }

  return (
      <div className='Component'>
        <input ref={habitMonth} type="month" onChange={
          () => setCalendar(<HabitCalendar monthSelected={habitMonth.current.value}/>)}/>
        {" "}
        <select>
          {habits.map(habit=><option>{habit}</option>)}
        </select>
        {" "}
        <input ref={habitName} type="text"/>
        <button onClick={handleAddHabit}>Add Habit</button>
        {calendar}
      </div>
  );
}
