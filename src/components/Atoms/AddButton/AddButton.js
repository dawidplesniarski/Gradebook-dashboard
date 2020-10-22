import React, {useState} from "react";
import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  position: fixed;
  right: 30px;
  bottom: 40px;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: #0cc30c;
  border-width: 0;
  transition: 0.3s;
  ${({open}) => open && `
    transform: rotate(45deg);
    background-color: #EC0101;
  `}
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: #fff;
    &:nth-child(2) {
      position: fixed;
      transform: rotate(90deg);
    }
  }
`;

const AddButton = ({open, onClick}) => {
    return (
        <StyledButton open={open} onClick={onClick}>
            <div/>
            <div/>
        </StyledButton>
    );
};

export default AddButton;