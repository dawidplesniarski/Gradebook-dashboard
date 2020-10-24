import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import {withRouter} from "react-router";
import Burger from "../components/Molecules/Hamburger/Burger";
import BackButton from "../components/Atoms/BackButton/BackButton";
import AddQuiz from "../components/Forms/AddTest/AddQuiz";
import QuizBanerImage from '../assets/images/quiz-image.svg'
import AddPermission from "../components/Forms/AddPermissionForm/AddPermission";


const AddQuizPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const StyledQuizImage = styled.img`
  margin-top: 20px;
  width: 20%;
`;

const AddQuizPage = ({history}) => {
    return (
        <AddQuizPageWrapper>
            <Burger/>
            <StyledQuizImage src={QuizBanerImage} alt={'Quiz baner'}/>
            <BackButton onClick={() => history.push('/mainPage')}/>
            <AddQuiz/>
            <AddPermission/>
        </AddQuizPageWrapper>
    );
};

export default (withRouter(AddQuizPage));