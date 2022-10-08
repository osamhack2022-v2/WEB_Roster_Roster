import React, {useState} from "react";
import styled from 'styled-components'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

const RightPart_Style = styled.div`
  padding: 0% 0% 0% 2%
`

export default function RightPart() {
  const [value, onChange] = useState(new Date());
  return (
    <RightPart_Style>
      <Calendar value={value} onChange={onChange}/>
    </RightPart_Style>
  );
}
