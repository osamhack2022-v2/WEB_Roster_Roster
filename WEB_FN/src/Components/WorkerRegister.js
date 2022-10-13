import React, { useRef, useContext} from 'react';
import styled from 'styled-components';
import { ReducerContext } from './Context/ReducerContext';
import useUuid from './hooks/useUuid'

const StyledButton = styled.button`
cursor : pointer;
`;

export default function WorkeerRegister() {
  const { dispatch, rankAndName } = useContext(ReducerContext);

  //리듀서 말고 스테이트로 수정
  const focus = useRef();

  const onChange = (e) => {
    const { value } = e.target; 

    dispatch({
      type: 'CHANGE',
      inputValue: value,
    });
  };

  const onCreate = () => {
    dispatch({
      type: 'CREATE',
      worker: {
        id: useUuid(),
        rankAndName: rankAndName,
      },
    });
    focus.current.value = '';
    focus.current.focus();
    
  };

  return (
    <div>
      <input type="text" onChange={onChange} ref={focus} />
      <StyledButton onClick={onCreate}>입력</StyledButton>
    </div>
  );
}
