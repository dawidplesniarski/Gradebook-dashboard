import React from "react";
import styled from 'styled-components';

const AddQuizFormWrapper = styled.div`
  //position: fixed;
  background-color: #FFF;
  //left : 30%;
  //top: 25%;
  width: 700px;
  height: 500px;
  display: flex;
  flex-direction: column;
  padding: 0.25rem;
  align-items: center;
  @media (max-width: 1000px) {
    width: 500px;
  }
  @media (max-width: 800px) {
    width: 400px;
  }
  @media (max-width: 700px) {
    width: 350px;
  }
`;

const StyledFormTitle = styled.p`
  font-family: Montserrat,serif;
  font-weight: 500;
  font-size: 25px;
`;

const StyledAnswersBox = styled.div`
  text-align: center;
  width: 75%;
`;

const StyledQuestionBox = styled.div`
  width: 95%;
`;

const StyledAnswer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
`;

export {AddQuizFormWrapper, StyledFormTitle, StyledAnswersBox, StyledQuestionBox, StyledAnswer};