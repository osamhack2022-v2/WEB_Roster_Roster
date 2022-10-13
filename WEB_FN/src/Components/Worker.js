import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  cursor : pointer;
`;

export default function Worker({ worker, onRemove, onRevise }) {
  return (
    <p key={worker.id}>
      {worker.rankAndName}
      <StyledButton onClick={() => onRevise(worker.id)}>수정</StyledButton>
      <StyledButton onClick={() => onRemove(worker.id)}>삭제</StyledButton>
    </p>
  );
}
