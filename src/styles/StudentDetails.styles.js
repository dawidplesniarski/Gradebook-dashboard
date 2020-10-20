import React from "react";
import styled from 'styled-components';

const StudentDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  align-items: center;
  padding-top: 30px;
`;
const UserInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  img {
  width: 250px;
  height: 250px;
  border-radius: 200px;
  }
  @media(max-width: 768px) {
    img {
      width: 140px;
      height: 140px;
      border-radius: 100px;
    }
  }
`;
const StyledParagraph = styled.p`
  font-weight: 300;
  font-size: 25px;
  font-family: Montserrat,serif;
`;

const StyledAlbumNumber = styled.p`
  font-weight: normal;
  font-size: 30px;
  font-family: Montserrat,serif;
`;

const StyledListElement = styled.li`
  font-family: Montserrat,serif;
  font-weight: 200;
  font-size: 20px;
  text-align: center;
`;

const StyledList = styled.ul`
    list-style-type: none;
    text-align: center;
`;

export  {StudentDetailsWrapper, UserInfoBox, StyledParagraph, StyledAlbumNumber, StyledListElement, StyledList};