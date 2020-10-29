import React from "react";
import styled from 'styled-components';
import LeftArrow from '../../../assets/images/left-arrow.png';

const StyledBackButton = styled.button`
  display: flex;
  width: 60px;
  height: 60px;
  position: fixed;
  left: 30px;
  bottom: 60px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: transparent;
  border: 1px solid black;
  z-index: 1;
  @media (max-width: 768px) {
    left: 10px;
    bottom: 10px;
    width: 30px;
    height: 30px;
  }
`;

const StyledBackButtonIcon = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  @media (max-width: 768px) {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

const BackButton = ({onClick}) => {
    return(
        <StyledBackButton onClick={onClick}>
            <StyledBackButtonIcon src={LeftArrow}/>
        </StyledBackButton>
    );
};

export default BackButton;