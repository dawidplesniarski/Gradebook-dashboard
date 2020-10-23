import React from "react";
import styled from 'styled-components';
import LeftArrow from '../../../assets/images/left-arrow.png';

const StyledBackButton = styled.button`
  display: flex;
  width: 60px;
  height: 60px;
  position: fixed;
  left: 30px;
  bottom: 30px;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  background-color: transparent;
  border: 1px solid black;
`;

const StyledBackButtonIcon = styled.img`
  width: 2.5rem;
  height: 2.5rem;
`;

const BackButton = ({onClick}) => {
    return(
        <StyledBackButton onClick={onClick}>
            <StyledBackButtonIcon src={LeftArrow}/>
        </StyledBackButton>
    );
};

export default BackButton;