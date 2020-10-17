import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {getUniversities} from "../actions/universityActions";
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

const StudentPage = (studentReducer) => {

    return(
        <StyledContainer>
            <SideBar/>
            <span>Dawid</span>
            <span>Pleśniarski</span>
        </StyledContainer>
    );
};

const mapStateToProps = ({studentReducer}) => {
    return studentReducer;
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUniversities: () => dispatch(getUniversities())
    };
};

export default connect(mapStateToProps, mapDispatchToProps())(withRouter(StudentPage));