import React from "react";
import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  position: fixed;
  right: 30px;
  top: 30px;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: #0cc30c;
  border-width: 0;
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

const AddButton = () => {
    return (
        <StyledButton>
            <div/>
            <div/>
        </StyledButton>
    );
};

export default AddButton;