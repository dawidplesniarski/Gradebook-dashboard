import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import {withRouter} from "react-router";
import Burger from "../components/Molecules/Hamburger/Burger";
import BackButton from "../components/Atoms/BackButton/BackButton";


const AddQuizPageWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const AddQuizPage = ({history}) => {
    return (
        <AddQuizPageWrapper>
            <Burger/>
            <BackButton onClick={() => history.push('/mainPage')}/>
        </AddQuizPageWrapper>
    );
};

export default (withRouter(AddQuizPage));