 import React from "react";
import LeftPart from './Components/LeftPart.js'
import RightPart from './Components/RightPart.js'
import './style.css'
import styled from 'styled-components'

const Container_Style = styled.div`
  display: flex;
`



export default function App() {
  
  
  return (
    <Container_Style> 
      <LeftPart />
      <RightPart />
    </Container_Style>
  );
}



