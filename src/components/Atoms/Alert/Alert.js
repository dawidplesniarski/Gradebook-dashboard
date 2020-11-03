import React from "react";
import styled from 'styled-components';
import VerifiedIcon from '../../../assets/images/verified.png';
import ErrorIcon from '../../../assets/images/error.png'
import {Grow} from "@material-ui/core";

const StyledAlertWrapper = styled.div`
  display: flex;
  width: 400px;
  height: 250px;
  position: fixed;
  background-color: #FFF;
  top: 50%;
  left: 50%;
  margin-left: -200px;
  margin-top: -125px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 15px;
  z-index: 10;
  border: 0.5px solid #9cd4ae;
  
  @media (max-width: 768px) {
    width: 200px;
    height: 125px;
    margin-left: -100px;
    margin-top: -62.5px;
    border-radius: 10px;
  }
  ${({type}) => type === 'error' && `
      border: 0.5px solid #e54053;
  `}
`;

const StyledAlertIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #FFF;
  height: 85px;
  width: 85px;
  border-radius: 50%;
  align-items: center;
  margin-top: -50px;
  border: 0.5px solid #9cd4ae;
  
  @media (max-width: 768px) {
    height: 42.5px;
    width: 42.5px;
    margin-top: -25px;
  }
  
  ${({type}) => type === 'error' && `
      border: 0.5px solid #e54053;
  `}
`;

const StyledAlertIcon = styled.img`
  width: 64px;
  height: 64px;
  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

const StyledAlertTitle = styled.p`
  font-family: Montserrat,serif;
  font-weight: bold;
  font-size: 1.5rem;
  color: #5b6167;
  @media (max-width: 768px) {
  font-size: 0.8rem;
  }
`;

const StyledAlertMessage = styled.p`
  font-family: Montserrat,serif;
  text-align: center;
  font-weight: normal;
  font-size: 1.2rem;
  color: #5b6167;
  @media (max-width: 768px) {
  font-size: 0.7rem;
  }
`;

const StyledAlertButton = styled.button`
  width: 75%;
  border-radius: 15px;
  background-color: #9cd4ae;
  font-family: Montserrat,serif;
  font-weight: normal;
  font-size: 1.2rem;
  letter-spacing: 3px;
  color: #FFF;
  border: 0;
  &:hover {
    background-color: #b1e3c0;
  }
  @media (max-width: 768px) {
    font-size: 0.6rem;
    border-radius: 10px;
  }
  ${({type}) => type === 'error' && `
    background-color: #e54053;
    &:hover {
    background-color: #e56573;
  }
  `}
`;

const AlertComponent = ({onClick, type, message}) => {
    return (
        <Grow timeout={300} in={type !== ''}>
            <StyledAlertWrapper type={type}>
                <StyledAlertIconWrapper type={type}>
                    {type === 'error' ?
                        <StyledAlertIcon src={ErrorIcon} alt={'Error'}/> :
                        <StyledAlertIcon src={VerifiedIcon} alt={'Success'}/>
                    }
                </StyledAlertIconWrapper>
                {type === 'error' ?
                    <StyledAlertTitle>Operacja nie powiodła się</StyledAlertTitle> :
                    <StyledAlertTitle>Operacja powiodła się</StyledAlertTitle>
                }
                <StyledAlertMessage>
                    {message}
                </StyledAlertMessage>
                <StyledAlertButton onClick={onClick} type={type}>
                    Zamknij
                </StyledAlertButton>
            </StyledAlertWrapper>
        </Grow>
    );
};

export default AlertComponent;