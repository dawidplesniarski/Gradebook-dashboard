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
`;

const StyledImg = styled.img`
width: 80%;
border-radius: 20px;
`;

const StyledParagraph = styled.p`
font-size: 1.25rem;
font-weight: 450;
color: #fff;
margin: 5px;

@media (max-width: 900px) {
  font-size: 1rem;
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
  @media (max-width: 768px) {
    width: 40px;
  }
`;


export { SideBarWrapper, StyledImg, StyledParagraph, StyledLogoutButton, StyledLogoutIcon };