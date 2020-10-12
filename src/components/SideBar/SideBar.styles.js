import React from "react";
import styled from 'styled-components';

const SideBarWrapper = styled.div`
 height: 100%;
 width: 15%;
 min-width: 150px;
 background-color: #6ecaaa;
 position: fixed;
 top: 0;
 left: 0;
 display: flex;
 flex-direction: column;
 justify-content: flex-start;
 align-items: center;
 padding-top: 15px;
 text-align: center;
 
`;

const StyledImg = styled.img`
width: 100px;
height: 100px;
border-radius: 100px;
`;

const StyledParagraph = styled.p`
font-family: Helvetica;
font-size: 17px;
font-weight: 450;
color: #fff;
margin: 5px;
`;


export { SideBarWrapper, StyledImg, StyledParagraph };