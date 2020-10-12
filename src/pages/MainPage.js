import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import AddGradeForm from "../components/Forms/AddGrade/AddGradeForm";
import SideBar from "../components/SideBar/SideBar";
import '../styles/MainPage.css'
import {getUniversities} from "../actions/universityActions";

const StyledWrapper = styled.div`
height: 50%;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
margin-top: 20%;
`;

const MainPage = ({loginReducer, universityReducer, getUniversities}) => {

    useEffect(() => {
        getUniversities();
    }, []);
    return (
        <StyledWrapper>
            <div className={'main-page-container'}>
                <SideBar/>
                <AddGradeForm/>
            </div>
        </StyledWrapper>
    );
}

const mapStateToProps = ({loginReducer, universityReducer}) => {
    return {loginReducer, universityReducer};
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUniversities: () => dispatch(getUniversities())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MainPage));