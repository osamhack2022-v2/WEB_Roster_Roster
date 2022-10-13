import React from 'react';
import styled from 'styled-components';
import PrintWorkerList from './PrintWorkerList';
import WorkerRegister from './WorkerRegister';

const StyledLeftPart = styled.div`
  width : 30%;
  height : 100%;
`;

export default function LeftPart() {
  return (
    <StyledLeftPart>
      <WorkerRegister />
      <PrintWorkerList />
    </StyledLeftPart>
  );
}
