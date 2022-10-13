import React, { useReducer } from 'react';
import LeftPart from './Components/LeftPart.js';
import RightPart from './Components/RightPart.js';
import './style.css';
import styled from 'styled-components';
import { ReducerContext } from './Components/Context/ReducerContext.js';
import {CalenderContext} from './Components/Context/CalenderContext.js'
import week from './Components/Calender/CalenderDayMaker'

const StyledContainer = styled.div`
  display: flex;
  padding: 0% 0% 0% 2%;
`;


function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE':
      return ({
        ...state,
        inputs: {
          ...state.inputs,
          rankAndName: action.inputValue,
        },
      }) ;
    case 'CREATE':
      return {
        ...state,
        workerList: state.workerList.concat(action.worker),
        inputs : {
          rankAndName: '',
          id: '',
        },
      };
    case 'REMOVE':
      return {
        ...state,
        workerList: state.workerList.filter(
          (element) => element.id !== action.id
        ),
      };
    case 'REVISE':
      return;
    default:
      return state;
  }
}

export default function App() {
  const initialState = {
    inputs: {
      rankAndName: '',
      id: '',
    },
    workerList: [],
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  const { rankAndName } = state.inputs;
  const calenderValue = week
  



  return (
    <CalenderContext.Provider value={calenderValue}>
      <ReducerContext.Provider value={{ state, dispatch, rankAndName }}>
        <StyledContainer>
          <LeftPart />
          <RightPart />
        </StyledContainer>
      </ReducerContext.Provider>
    </CalenderContext.Provider>
  );
}

// 최종자료 형
// [
//   {worker : {
//     day : (당직서는날),
//     name : (근무자이름),
//     id : (는 당직서는날로설정)
//     }
//   },
// ]  material-ui
