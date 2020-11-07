import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import Burger from "../../components/Molecules/Hamburger/Burger";
import {connect} from 'react-redux';
import {withRouter} from "react-router";
import BackButton from "../../components/Atoms/BackButton/BackButton";
import {getUniversities} from "../../actions/universityActions";

const StyledUniversitiesPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 50px;
`;

const AdminUniversitiesPage = ({history, universityReducer, getUniversities}) => {

    useEffect(() => {
        getUniversities();
    }, []);
    return (
        <>
            <Burger/>
            <BackButton onClick={() => history.push('/adminMainPage')}/>
            <StyledUniversitiesPageContainer>
                {universityReducer.universities.length > 0 && <span>{universityReducer.universities.length}</span>}
            </StyledUniversitiesPageContainer>
        </>
    );
};

const mapStateToProps = ({universityReducer}) => {
    return {universityReducer};
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUniversities: () => dispatch(getUniversities())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AdminUniversitiesPage));