import React from "react";
import styled from 'styled-components'
import Calender from './Calender/Calender'

const RightPart_Style = styled.div`
  width : 70%;
  height : 100%;
  padding: 0% 0% 0% 2%;
`

export default function RightPart() {
  return (
    <RightPart_Style>
      <Calender />
    </RightPart_Style>
  );
}
