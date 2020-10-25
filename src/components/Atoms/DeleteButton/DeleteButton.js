import React from "react";
import styled, {css} from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border-width: 0;
  transform: rotate(45deg);
  background-color: #EC0101;
  
  &:hover {
    ${({disabled}) =>
    !disabled &&
    css`
      opacity: 30%;
    `
}
    }
    ${({disabled}) =>
    disabled &&
    css`
      background-color: #bcbcbc;
    `}
    
  div {
    width: 1rem;
    height: 0.25rem;
    background-color: #fff;
    &:nth-child(2) {
      position: fixed;
      transform: rotate(90deg);
    }
  }
`;

const DeleteButton = ({onClick, disabled}) => {
  return(
      <StyledButton onClick={onClick} disabled={disabled}>
          <div/>
          <div/>
      </StyledButton>
  )
};

export default DeleteButton;

