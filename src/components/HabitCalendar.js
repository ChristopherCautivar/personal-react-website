import React from 'react';
import HabitDay from './HabitDay';
import { v4 as uuidv4 } from 'uuid';

export default function HabitCalendar({ monthSelected, habitDays, trackDay }) {
  function handleCalendarClick(id){
    trackDay(monthSelected, id)
  }

  function makeCalendar(size, dayStart, mEnd, habitDays){
    // create habitDays array if doesn't already exist
    if(habitDays.length === 0){
      for(let i = 1; i <= size; i++){
        // create all habitDay components
        // reminder, a day looks like {id: uuidv4(), day: # or null tracked: false}
        // if day is before or after month create empty item
        if(i <= dayStart || i > (mEnd + dayStart)){
          habitDays.push({id:uuidv4(), day:null, tracked:false})
        } else {
          habitDays.push({id:uuidv4(), day:i-dayStart, tracked:false})
        }
      }
    }
    // habitDays array finished, create the structure of the calendar
    let cal = []
    let row = []
    for(let i = 1; i <= habitDays.length; i++){
      // if a week has been parsed, add it to the cal, else make it a row
      // code is a little unclear due to structure having an if else for row push when
      // but is not too offensive
      if(!(i%7)){
        row.push(<HabitDay key={habitDays[i-1].id} habitDay={habitDays[i-1]} completeHabit={handleCalendarClick}/>)
        cal.push(
          <tr key={i/7}>
            {row}
          </tr>
        );
        row = []
      } else {
        row.push(<HabitDay key={habitDays[i-1].id} habitDay={habitDays[i-1]} completeHabit={handleCalendarClick}/>)
      }
    }
    return cal
  }

  // set up some date values necessary to make the calendar
  const [year, month] = monthSelected.split("-").map(e=>parseInt(e))
  const lastDate = new Date(year, month, 0)
  const firstDate = new Date(year, month-1)
  const calendarSize = firstDate.getDay() + lastDate.getDate() + 6 - lastDate.getDay()

  return (
    <table>
      <tbody>
        {makeCalendar(calendarSize, firstDate.getDay(), lastDate.getDate(), habitDays)}
      </tbody>
    </table>
  );
}
