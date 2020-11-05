import React from "react";
import styled from 'styled-components';
import {connect} from "react-redux";
import {withRouter} from "react-router";
import Burger from "../../components/Molecules/Hamburger/Burger";
import BackButton from "../../components/Atoms/BackButton/BackButton";
import EditStudentForm from "../../components/Forms/EditStudentForm/EditStudentForm";
import ChangeStudentSemester from "../../components/Forms/ChangeStudentSemester/ChangeStudentSemester";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SelectedStudentPage = ({studentReducer, history}) => {
    return (
        <>
            <Burger isAdminOpened={true}/>
            <BackButton onClick={() => history.push('/adminStudentsPage')}/>
            <StyledWrapper>
                {studentReducer.currentStudentId && <EditStudentForm/>}
                {studentReducer.currentStudent && <ChangeStudentSemester/>}
            </StyledWrapper>
        </>
    )
};

const mapStateToProps = ({studentReducer}) => {
    return {studentReducer};
}

export default connect(mapStateToProps)(withRouter(SelectedStudentPage));