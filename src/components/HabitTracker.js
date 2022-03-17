import React, { useState, useRef, useEffect } from 'react';
import HabitCalendar from './HabitCalendar';
import { v4 as uuidv4 } from 'uuid';
import './HabitTracker.css'

export default function HabitTracker() {
  const habitMonth = useRef({})
  const currHabit = useRef({})
  const habitName = useRef({})
  // useState is responsible for triggering rerenders, otherwise habitMonth's useRef would be enough
  // to access and set the variable
  const [calendar, setCalendar] = useState({})
  const [habits, setHabits] = useState([{id: uuidv4(), name:"this habit"}, {id: uuidv4(), name:"that habit"}])
  const [calKey, setCalKey] = useState("")

  const LOCAL_STORAGE_KEY='habitTracker.calendars'

  useEffect(() => {
    const storedCalendars = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedCalendars) setCalendar(storedCalendars)
  }, [])

  // monitor the calendar state variable
  useEffect(() => {
    console.log(calendar)
  }, [calendar])

  // calendar object: { id:uuidv4(), "month-year-habitName":[{id: uuidv4(), complete: false}, {id: uuidv4(), complete: true}, ...]}

  function handleCalendar(e){
    if (!currHabit.current.value || !habitMonth.current.value) return
    const key = `${habitMonth.current.value}-${currHabit.current.value}`
    // if key not in calendars, make calendar in key, insert it into
    // calendars object
    if(!calendar[key]){
      const newCalendar = {...calendar};
      newCalendar[key] = [];
      setCalendar(newCalendar);
    }
    setCalKey(key);
  }

  function handleAddHabit(e){
    const name = habitName.current.value
    if (name === '') return
    setHabits(prevHabits => [...prevHabits, {id: uuidv4(), name: name}])
    habitName.current.value = null
  }

  return (
      <div className='Component'>
        <input ref={habitMonth} type="month"  onChange={
          ()=>handleCalendar(habitMonth.current.value)}/>
        {" "}
        <select ref={currHabit} onChange={ ()=>handleCalendar(habitMonth.current.value) }>
          {habits.map(habit=><option key={habit.id}>{habit.name}</option>)}
        </select>
        {" "}
        <input ref={habitName} type="text"/>
        <button onClick={handleAddHabit}>Add Habit</button>

        {/* perhaps rendering of the calendar should be based on the existence of the above fields? because as 
        it is now, we have the designed using the state as a storage variable and the rendering variable */}
        {/* note that calendar must be tested first in order for the page to render correctly */}
        {currHabit.current.value && habitMonth.current.value && calKey ?
         <HabitCalendar monthSelected={calKey} habitDays={calendar[calKey]}/> :
          <div>Choose a month and a habit to start!</div>}
      </div>
  );
}
