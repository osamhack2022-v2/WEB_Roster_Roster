import React, { useContext } from 'react';
import { CalenderContext } from '../Context/CalenderContext.js';

function WeekMaker({week}) {
  return (
    <tr>
      {week.dayList.map((element) => (
          <td key={element.id}>{element.day}</td>
        ))}
    </tr>
  );
}

function CalenderTopMaker() {
  const day = ['일', '월', '화', '수', '목', '금', '토'];
  const result = day.map((prop) => <th>{prop}</th>);
  return (
    <thead>
      <tr>{result}</tr>
    </thead>
  );
}

function CalenderWeekMaker() {
  const calenderValue = useContext(CalenderContext);
  
  return (
    <tbody>
      {calenderValue.map( week => <WeekMaker week={week} />)}
    </tbody>
  );
}

export default function CalenderMaker() {
  return (
    <table>
      <CalenderTopMaker />
      <CalenderWeekMaker/>
    </table>
  );
}
