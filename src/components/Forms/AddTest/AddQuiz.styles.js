import React from "react";
import styled from 'styled-components';

const AddQuizFormWrapper = styled.div`
  position: fixed;
  background-color: #FFF;
  left : 30%;
  top: 25%;
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  padding: 0.25rem;
  align-items: center;
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

export {AddQuizFormWrapper, StyledFormTitle, StyledAnswersBox, StyledQuestionBox};