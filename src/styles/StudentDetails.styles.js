import React from "react";
import styled from 'styled-components';

const StudentDetailsWrapper = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  text-align: center;
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
  align-self: center;
`;

const StyledList = styled.ul`
    list-style-type: none;
    align-items: center;
    //text-align: center;
    border-width: 1px;
`;

export  {StudentDetailsWrapper, UserInfoBox, StyledParagraph, StyledAlbumNumber, StyledListElement, StyledList};