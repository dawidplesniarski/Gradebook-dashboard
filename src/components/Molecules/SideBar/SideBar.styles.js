import React from "react";
import styled from 'styled-components';

const SideBarWrapper = styled.div`
 height: 100%;
 width: 15%;
 min-width: 150px;
 background-color: #0099ff;
 transform: ${({open}) => open? 'translateX(0)' : 'translateX(-100%)'};
 transition: transform 0.3s ease-in-out;
 position: fixed;
 top: 0;
 left: 0;
 bottom:0;
 display: flex;
 flex-direction: column;
 justify-content: flex-start;
 align-items: center;
 padding-top: 3.5rem;
 text-align: center;
 border-top-right-radius: 20px;
 border-bottom-right-radius: 20px;
 z-index: 3;
`;

const StyledImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  padding-bottom: 20px;
  @media (max-width: 1050px) {
    width: 100px;
    height: 100px;
  }
`;

const StyledParagraph = styled.p`
font-size: 1rem;
font-weight: 450;
color: #fff;
margin: 5px;
font-family: Montserrat,serif;

@media (max-width: 900px) {
  font-size: 0.8rem;
}

@media (max-width: 768px) {
  font-size: 0.9rem;
}
`;

const StyledLogoutButton = styled.button`
  display: flex;
  position: fixed;
  bottom: 60px;
  background-color: transparent;
  border-width: 0;
  &:hover {
    border: 1px solid #FFF;
    border-radius: 10px;
  }
`;

const StyledLogoutIcon = styled.img`
  display: flex;
  text-align: center;
  width: 50px;
  @media (max-width: 768px) {
    width: 40px;
  }
`;

const StyledHomeIcon = styled.img`
  display: flex;
  text-align: center;
  width: 35px;
  @media (max-width: 768px) {
    width: 25px;
  }
`;

const StyledHomeButton = styled.button`
  display: flex;
  background-color: transparent;
  border-width: 0;
  margin-top: 35px;
  margin-bottom: -10px;
`;


export { SideBarWrapper, StyledImg, StyledParagraph, StyledLogoutButton, StyledLogoutIcon, StyledHomeIcon, StyledHomeButton };