import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import Header from "../components/Header/Header";
import AddGradeForm from "../components/Forms/AddGrade/AddGradeForm";

const StyledWrapper = styled.div`
height: 50%;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
margin-top: 20%;
`;

const MainPage = ({loginReducer}) => {

    return (
        <StyledWrapper>
            <Header/>
            <AddGradeForm/>
        </StyledWrapper>
    );
}

const mapStateToProps = ({loginReducer}) => {
    return {loginReducer};
};

export default connect(mapStateToProps)(withRouter(MainPage));