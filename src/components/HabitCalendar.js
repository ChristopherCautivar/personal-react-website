import React from 'react';
import HabitDay from './HabitDay';

function track(){
}

function makeCalendar(size, dayStart, mEnd){
  let days = []
  for(let i = 0; i <= size; i++){
    // create all habitDay components
    // if day is before or after month create empty item
    if(i <= dayStart || i > (mEnd + dayStart)){
      days.push(<HabitDay day={""} tracked={false}/>)
    } else {
      days.push(<HabitDay day={i-dayStart} tracked={true}/>)
    }
  }
  console.log(days)
  let cal = []
  let row = []
  for(let i = 1; i <= days.length; i++){
    // if a week has been parsed, add it to the cal, else make it a row
    if(!(i%7)){
      row.push(days[i])
      cal.push(
        <tr>
          {row}
        </tr>
      );
      row = []
    } else {
      row.push(days[i])
    }
  }
  return cal
}

export default function HabitCalendar({ monthSelected }) {
  const [year, month] = monthSelected.split("-").map(e=>parseInt(e))
  const lastDate = new Date(year, month, 0)
  const firstDate = new Date(year, month-1)
  const calendarSize = firstDate.getDay() + lastDate.getDate() + 6 - lastDate.getDay()
  // const a = Array(lastDate.getDate()).fill(0).map(()=>i++)
  return (
    <table>
      <tbody>
        {makeCalendar(calendarSize, firstDate.getDay(), lastDate.getDate())}
      </tbody>
    </table>
  );
}
