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
`;

const ImageWrapper = styled.img`
  display: flex;
  align-items: center;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 140px;
    height: 140px;
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
  margin-right: 40px;
`;

const StyledList = styled.ul`
    list-style-type: none;
    align-items: center;
    border-width: 1px;
`;

export  {StudentDetailsWrapper, UserInfoBox, StyledParagraph, StyledAlbumNumber, StyledListElement, StyledList, ImageWrapper};