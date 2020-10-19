import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {getCurrentStudent} from "../actions/studentActions";
import styled from 'styled-components';
import SideBar from "../components/SideBar/SideBar";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding-left: 8%;
  
  @media screen and (max-width: 900px) {
   margin-left: 100px;
   }
`;

const UserInfoHeader = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-content: center;
  
  img {
  width: 100px;
  height: 100px;
  }
`;

const StudentPage = ({studentReducer, getCurrentStudent}) => {

    useEffect(() => {
        getCurrentStudent(studentReducer.currentStudentId);
    })

    return(
        <StyledContainer>
            <SideBar/>
            {studentReducer.currentStudent ?
                <UserInfoHeader>
                    <StyledStudentAvatar src={studentReducer.currentStudent.imageUrl} alt={'Avatar'}/>
                    <span>{studentReducer.currentStudent.name}</span>
                    <span>{studentReducer.currentStudent.lastName}</span>
                </UserInfoHeader>
             : <div/>}
        </StyledContainer>
    );
};

const mapStateToProps = (studentReducer) => {
    return studentReducer;
};

const mapDispatchToProps = (dispatch) => {
    return {
        getCurrentStudent: (studentId) => dispatch(getCurrentStudent(studentId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(StudentPage));