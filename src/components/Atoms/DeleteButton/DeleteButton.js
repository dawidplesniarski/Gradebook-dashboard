import React from "react";
import styled from 'styled-components';

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
    opacity: 50%;
  }
    
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

const DeleteButton = ({onClick}) => {
  return(
      <StyledButton onClick={onClick}>
          <div/>
          <div/>
      </StyledButton>
  )
};

export default DeleteButton;

