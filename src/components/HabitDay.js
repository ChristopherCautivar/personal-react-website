import React from 'react';

export default function HabitDay({ day }) {
  return (
    <td>
        <button className='tracked'>{day}</button>
    </td>
  );
}
