import React from "react";
import styled from 'styled-components';
import {withRouter} from "react-router";
import Burger from "../components/Molecules/Hamburger/Burger";
import BackButton from "../components/Atoms/BackButton/BackButton";
import AddQuiz from "../components/Forms/AddTest/AddQuiz";
import QuizBanerImage from '../assets/images/quiz-image.svg'
import AddPermission from "../components/Forms/AddPermissionForm/AddPermission";
import Footer from "../components/Molecules/Footer/Footer";


const AddQuizPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
`;

const StyledQuizImage = styled.img`
  margin-top: 20px;
  width: 20%;
`;

const AddQuizPage = ({history}) => {
    return (
        <>
            <Burger/>
            <AddQuizPageWrapper>
                <BackButton onClick={() => history.push('/mainPage')}/>
                <StyledQuizImage src={QuizBanerImage} alt={'Quiz baner'}/>
                <AddQuiz/>
                <AddPermission/>
            </AddQuizPageWrapper>
            <Footer/>
        </>
    );
};

export default withRouter(AddQuizPage);