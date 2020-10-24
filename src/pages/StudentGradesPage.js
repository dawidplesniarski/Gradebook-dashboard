import React from "react";
import styled from 'styled-components';
import {withRouter} from "react-router";
import Burger from "../components/Molecules/Hamburger/Burger";
import BackButton from "../components/Atoms/BackButton/BackButton";

const StudentGradesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StudentGradesPage = ({history}) => {
    return(
        <StudentGradesWrapper>
            <Burger/>
            <BackButton onClick={() => history.push('/studentDetails')}/>
            <span>something</span>
        </StudentGradesWrapper>
    );
};

export default withRouter(StudentGradesPage);