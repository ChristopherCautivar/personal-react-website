import React from 'react';
import HabitDay from './HabitDay';

function track(){
}

export default function HabitCalendar({ monthSelected }) {
  const [year, month] = monthSelected.split("-").map(e=>parseInt(e))
  const lastDate = new Date(year, month, 0)
  const firstDate = new Date(year, month-1)
  const calendarLength = lastDate.getDate() + (7-((lastDate.getDate() + firstDate.getDay())%7))
  const a = Array.from(Array(lastDate.getDate()).keys())
  // const a = Array(lastDate.getDate()).fill(0).map(()=>i++)
  return (
    <table>
      <tbody>
        {/* <tr> */}
          {/* <HabitDay day={1}/> */}
        {/* </tr> */}
        {console.log(calendarLength)}
        {console.log(firstDate.getDay())}
      </tbody>
    </table>
  );
}
